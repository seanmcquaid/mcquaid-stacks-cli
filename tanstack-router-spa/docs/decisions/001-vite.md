# Vite

Date: 2023-12-27

Status: accepted

## Context

The current build system ecosystem for JavaScript applications has shown limitations in terms of development speed and modern JavaScript features support. Vite has gained traction as a build tool that leverages native ES modules and provides blazing-fast build times by utilizing esbuild as its bundler. Its ability to support modern features like HMR (Hot Module Replacement) out-of-the-box, rich plugin ecosystem and its straightforward configuration make it a compelling option for modern JavaScript development.

## Decision

After thorough evaluation and consideration, the decision has been made to utilize Vite for the build tool for the project. Vite's native ES module support aligns with our goal of embracing modern JavaScript features, enabling faster development cycles through HMR, and enhancing the overall developer experience. Its simple configuration and seamless integration with popular frontend frameworks like React, Vue, and others further solidified this decision.

## Consequences

The adoption of Vite is anticipated to yield numerous benefits for the development workflow. It expects to significantly enhance development speed by leveraging native ES module support and HMR, reducing build times, and improving developer productivity. However, there might be a short-term impact as you learn Vite's various configuration options, and all of the available plugins. Long-term benefits include improved scalability, better support for modern JavaScript features, and a more streamlined development process.
