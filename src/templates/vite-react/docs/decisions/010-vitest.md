# Vitest

Date: 2023-12-27

Status: accepted

## Context

I want to use a unit test runner that is fast and simple. Previously, Jest was the preferred unit test runner for React apps, however, it has fallen out of favor due to it's lack of consistence support. I also wanted to use the same configuration as my development/production build setup.

## Decision

I am using Vitest as my unit test runner. It is built on top of our build tool, Vite and has a very similar API to Jest.

## Consequences

There are minimal consequences to using Vitest. You are able to use the same API as Jest, but with the benefits of Vite's speed and simplicity. You are also able to use the same configuration as Vite, which is a huge benefit.
