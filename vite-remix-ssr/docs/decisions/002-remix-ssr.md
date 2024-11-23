# Remix SSR

Date: 2023-12-27

Status: accepted

## Context

Most React applications require client-side routing to manage navigation and handle different views within the application. React Router is a mature and widely adopted solution for client-side routing in React applications, offering comprehensive routing capabilities and seamless integration with React components and hooks. React Router V7 offers two modes for building React applications: SPA mode and SSR.

## Decision

We will use React Router V7 SSR mode for this template since this is primarily targetted at a React SSR application.

## Consequences

There is a small amount of additional overhead to use React Router V7 SSR mode over React Router as a library since it uses file based routing, but the benefits of using React Router V7 SSR mode outweigh the cons in most cases.
