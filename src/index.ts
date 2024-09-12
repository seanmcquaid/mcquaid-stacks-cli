#!/usr/bin/env node

import * as inquirer from "@inquirer/prompts";
import * as fs from "fs";
import * as path from "path";
import * as shelljs from "shelljs";

const CHOICES = fs.readdirSync(path.join(__dirname, "templates"));

const CURR_DIR = process.cwd();

interface TemplateConfig {
  files?: string[];
  postMessage?: string;
}

interface CliOptions {
  projectName: string;
  templateName: string;
  templatePath: string;
  targetPath: string;
  config: TemplateConfig;
}

function getTemplateConfig(templatePath: string): TemplateConfig {
  const configPath = path.join(templatePath, ".template.json");

  if (!fs.existsSync(configPath)) return {};

  const templateConfigContent = fs.readFileSync(configPath);

  if (templateConfigContent) {
    return JSON.parse(templateConfigContent.toString());
  }

  return {};
}

async function createProject(projectPath: string) {
  if (fs.existsSync(projectPath)) {
    console.log(`Folder ${projectPath} exists. Delete or use another name.`);
    return false;
  }

  fs.mkdirSync(projectPath);

  return true;
}

const SKIP_FILES = ["node_modules", ".template.json"];

function createDirectoryContents(
  templatePath: string,
  projectName: string,
  config: TemplateConfig
) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const origFilePath = path.join(templatePath, file);

    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    if (SKIP_FILES.indexOf(file) > -1) return;

    if (stats.isFile()) {
      let contents = fs.readFileSync(origFilePath, "utf8");

      if (file.includes(".template.gitignore")) {
        const writePath = path.join(CURR_DIR, projectName, ".gitignore");
        fs.writeFileSync(writePath, contents, "utf8");
      } else {
        const writePath = path.join(CURR_DIR, projectName, file);
        fs.writeFileSync(writePath, contents, "utf8");
      }
    } else if (stats.isDirectory()) {
      fs.mkdirSync(path.join(CURR_DIR, projectName, file));

      // recursive call
      createDirectoryContents(
        path.join(templatePath, file),
        path.join(projectName, file),
        config
      );
    }
  });
}

function showMessage(options: CliOptions) {
  console.log(`Go into the project: cd ${options.projectName}`);

  const message = options.config.postMessage;

  if (message) {
    console.log("");
    console.log(message);
    console.log("");
  }
}

const promptUser = async () => {
  const answers = {
    template: await inquirer.select({
      message: "What project template would you like to generate?",
      choices: CHOICES.map((choice) => ({
        name: choice,
        value: choice,
      })),
    }),
    name: await inquirer.input({
      message: "What would you like name the project?",
      validate: (input: string) => {
        if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
        else
          return "Project name may only include letters, numbers, underscores and hashes.";
      },
    }),
  };

  const templatePath = path.join(__dirname, "templates", answers.template);
  const targetPath = path.join(CURR_DIR, answers.name);
  const templateConfig = getTemplateConfig(templatePath);

  const options: CliOptions = {
    projectName: answers.name,
    templateName: answers.template,
    templatePath,
    targetPath,
    config: templateConfig,
  };

  if (!createProject(targetPath)) {
    return;
  }

  createDirectoryContents(templatePath, answers.name, templateConfig);

  await new Promise((resolve) => setTimeout(resolve, 500));

  shelljs.exec(`cd ${templatePath} && pnpm install`);

  await new Promise((resolve) => setTimeout(resolve, 100));

  shelljs.exec(`cd ${templatePath} && npm pkg set name=${answers.name}`);

  showMessage(options);
};

promptUser();
