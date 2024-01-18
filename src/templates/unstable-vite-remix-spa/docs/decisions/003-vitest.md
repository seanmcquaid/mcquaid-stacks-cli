# Vitest

Date: 2023-12-27

Status: proposed

## Context

Vitest, built on top of Vite, offers a streamlined and performant solution for running unit tests in JavaScript projects. Leveraging the speed and module-based architecture of Vite, Vitest aims to provide a fast and developer-friendly environment for writing and executing unit tests.

## Decision

We are going to use Vitest as the primary unit test runner for this project. Vitest's integration with Vite's module system, quick test execution, and developer-centric features make it an appealing choice to streamline our unit testing workflow. Its compatibility with modern JavaScript features and seamless integration within the Vite ecosystem influenced this proposed decision.

## Consequences

Vitest is anticipated to bring several benefits to the project. It expects to offer faster test execution times, a more developer-friendly testing experience, and improved compatibility with Vite's module-based architecture. The APIs are similar enough to Jest that any developer that has worked with that tool before should have a problem learning Vitest's APIs. However, there might be a slight learning curve while transitioning to Vitest, potentially impacting initial test implementation.
