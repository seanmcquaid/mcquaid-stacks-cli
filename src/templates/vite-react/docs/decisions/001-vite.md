# Vite

Date: 2023-11-26

Status: accepted

## Context

Vite is a new build tool for modern web applications. It is built on top of esbuild and provides a fast development experience. It is also framework agnostic and can be used with React, Vue, Svelte, etc. Due to the use of esbuild, it is also very fast at building production assets in comparison to something like Webpack.

## Decision

I recommend using Vite as your build tool for web applications. It is fast, provides a great development experience and has very solid performance for client side rendered applications in comparison to something like Webpack. It also has a large community and is well maintained.

## Consequences

Developers will need to learn the plugin ecosystem in Vite. However, the documentation is excellent and the plugin ecosystem is growing rapidly.
