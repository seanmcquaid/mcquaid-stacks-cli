# TSUp

Date: 2023-12-27

Status: accepted

## Context

In any TypeScript project, optimizing the build process and bundling code efficiently is crucial for performance and deployment. tsup is a minimal config TypeScript bundler that offers fast builds and minimal configuration overhead. Leveraging esbuild under the hood, tsup provides a straightforward solution for bundling TypeScript projects with its focus on simplicity and speed.

## Decision

After comprehensive evaluation, the decision has been made to adopt tsup as the primary bundler for the project. Its zero-config approach, integration with esbuild for fast and efficient bundling, and ease of use align well with the project's need for a streamlined and performant build process. The minimal setup required and the support for TypeScript's native features further solidified this decision.

## Consequences

The adoption of tsup is expected to bring several advantages to the project. It anticipates faster build times, reduced configuration complexity, and improved overall build performance. However, there might be a learning curve for those new to tsup, potentially impacting initial build setup timelines. In the long run, leveraging tsup is anticipated to streamline our build process, enhance developer productivity, and optimize our deployment workflows.
