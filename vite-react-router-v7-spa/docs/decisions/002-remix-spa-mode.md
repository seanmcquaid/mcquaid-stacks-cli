# React Router V7 SPA Mode

Date: 2023-12-27

Status: accepted

## Context

Most React applications require client-side routing to manage navigation and handle different views within the application. React Router is a mature and widely adopted solution for client-side routing in React applications, offering comprehensive routing capabilities and seamless integration with React components and hooks. React Router V7 offers two modes for building React applications: SPA mode and SSR.

## Decision

We will use React Router V7 SPA mode for this template since this is primarily targetted at a traditional Single Page Application mode. This gives you the option to migrate to SSR mode in the future if needed for your project.

## Consequences

React Router V7 mode is a good choice for most React applications, but if you have a need for server-side rendering, React Router V7 SSR mode may be a better choice for your project. It is VERY easy to migrate from React Router V7 SPA mode to React Router V7 SSR mode if needed in the future, all you have to do is update your `react-router-config.ts` file to have `ssr: true`.
