# Next SSR

Date: 2024-06-19

Status: accepted

## Context

Most React applications require client-side routing to manage navigation and handle different views within the application. React Router is a mature and widely adopted solution for client-side routing in React applications, offering comprehensive routing capabilities and seamless integration with React components and hooks. Next SSR is a framework that offers server-side rendering (SSR) capabilities out of the box, enabling developers to build React applications that render on the server and deliver HTML to the client for improved performance and SEO.

## Decision

We will use Next SSR for this template since this is primarily targetted at a React SSR application.

## Consequences

There is a small amount of additional overhead to use Next SSR since it uses file based routing, but the benefits of using Next SSR outweigh the cons in most cases.
