# Remix SPA Mode

Date: 2023-12-27

Status: accepted

## Context

Most React applications require client-side routing to manage navigation and handle different views within the application. React Router is a mature and widely adopted solution for client-side routing in React applications, offering comprehensive routing capabilities and seamless integration with React components and hooks. Remix is built on top of React Router and provides a framework for building React applications with server-side rendering, built in error handling, data fetching, and more. Remix offers two modes for building React applications: SPA mode and SSR.

## Decision

We will use Remix SPA mode for this template since this is primarily targetted at a traditional Single Page Application mode. Remix SPA mode offers the same client-side routing capabilities as React Router, but with the option to migrate to SSR mode in the future if needed for your project.

## Consequences

There is a small amount of additional overhead to use Remix SPA mode over React Router since it uses file based routing, but the benefits of using Remix SPA mode outweigh the cons in most cases. Remix SPA mode is a good choice for most React applications, but if you have a need for server-side rendering, Remix SSR mode may be a better choice for your project. Luckily with the Remix teams focus on developer experience, it is easy to migrate from Remix SPA mode to Remix SSR mode if needed in the future!
