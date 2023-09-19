#!/usr/bin/env node
// @ts-nocheck

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const yargs = require('yargs');
const ejs = require('ejs');

export interface TemplateData {
    projectName: string
}

function render(content: string, data: TemplateData) {
    return ejs.render(content, data);
}

const CHOICES = fs.readdirSync('./templates');

const args = yargs.argv as {
  [key: string]: string;
};

const QUESTIONS = [
  {
    name: 'template',
    type: 'list',
    message: 'What project template would you like to generate?',
    choices: CHOICES,
    when: async () => args['template'] 
  },
  {
    name: 'name',
    type: 'input',
    message: 'Project name:',
    when: () => args['name'],
    validate: (input: string) => {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      else return 'Project name may only include letters, numbers, underscores and hashes.';
    }
  }
];

const CURR_DIR = process.cwd();

export interface TemplateConfig {
  files?: string[]
  postMessage?: string
}

export interface CliOptions {
  projectName: string
  templateName: string
  templatePath: string
  tartgetPath: string
  config: TemplateConfig
}

inquirer.default.prompt(QUESTIONS)
.then(answers => {

  answers = Object.assign({}, answers, yargs.argv);
  
  const projectAnswers = answers as { [key: string]: string };

  const projectChoice = projectAnswers['template']
  const projectName = projectAnswers['name']
  const templatePath = path.join(__dirname, 'templates', projectChoice);
  const tartgetPath = path.join(CURR_DIR, projectName);
  const templateConfig = getTemplateConfig(templatePath);

  const options: CliOptions = {
    projectName,
    templateName: projectChoice,
    templatePath,
    tartgetPath,
    config: templateConfig
  }

  if (!createProject(tartgetPath)) {
    return;
  }

  createDirectoryContents(templatePath, projectName, templateConfig);

  if (!postProcess(options)) {
    return;
  }

  showMessage(options);
});

function showMessage(options: CliOptions) {
  console.log('');
  console.log('Done.');
  console.log(`Go into the project: cd ${options.projectName}`);

  const message = options.config.postMessage;

  if (message) {
    console.log('');
    console.log(message);
    console.log('');
  }

}

function getTemplateConfig(templatePath: string): TemplateConfig {
  const configPath = path.join(templatePath, '.template.json');

  if (!fs.existsSync(configPath)) return {};

  const templateConfigContent = fs.readFileSync(configPath);

  if (templateConfigContent) {
    return JSON.parse(templateConfigContent.toString());
  }

  return {};
}

function createProject(projectPath: string) {
  if (fs.existsSync(projectPath)) {
    console.log(`Folder ${projectPath} exists. Delete or use another name.`);
    return false;
  }

  fs.mkdirSync(projectPath);
  return true;
}

function postProcess(options: CliOptions) {
  if (isNode(options)) {
    return postProcessNode(options);
  }
  return true;
}

function isNode(options: CliOptions) {
  return fs.existsSync(path.join(options.templatePath, 'package.json'));
}

function postProcessNode(options: CliOptions) {
  shell.cd(options.tartgetPath);

  let cmd = '';

  if (shell.which('yarn')) {
    cmd = 'yarn';
  } else if (shell.which('npm')) {
    cmd = 'npm install';
  } else if(shell.which('pnpm')) {
    cmd = 'pnpm install';
  }

  if (cmd) {
    const result = shell.exec(cmd);

    if (result.code !== 0) {
      return false;
    }
  } else {
    console.log('No yarn, pnpm or npm found. Cannot run installation.');
  }

  return true;
}

const SKIP_FILES = ['node_modules', '.template.json'];

function createDirectoryContents(templatePath: string, projectName: string, config: TemplateConfig) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach(file => {
    const origFilePath = path.join(templatePath, file);

    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    if (SKIP_FILES.indexOf(file) > -1) return;

    if (stats.isFile()) {
      let contents = fs.readFileSync(origFilePath, 'utf8');

      contents = render(contents, { projectName });

      const writePath = path.join(CURR_DIR, projectName, file);
      fs.writeFileSync(writePath, contents, 'utf8');
    } else if (stats.isDirectory()) {
      fs.mkdirSync(path.join(CURR_DIR, projectName, file));

      // recursive call
      createDirectoryContents(path.join(templatePath, file), path.join(projectName, file), config);
    }
  });
}