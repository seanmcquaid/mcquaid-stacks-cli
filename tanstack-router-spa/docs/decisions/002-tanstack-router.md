# Tanstack Router

Date: 2024-12-07

Status: accepted

## Context

Most React applications require client-side routing to manage navigation and handle different views within the application. There are many routing libraries available for React, but the most popular one is React Router. However, Tanner Linsley recently released a new routing library called Tanstack Router, which is a lightweight, fast, and most importantly type-safe routing library for React.

## Decision

We will use Tanstack Router as the routing library for our React applications.

## Consequences

There is a small amount of additional overhead to use Tanstack Router, as it requires a bit of setup and configuration. However, the benefits of type safety and performance outweigh the initial setup cost. Additionally, Tanstack Router is actively maintained and has a growing community, which means that we can expect continued support and updates in the future. Tanner Linsley is also working on TanStack Start, which will be a SSR framework built on top of Tanstack Router, which will make it easier to migrate to server-side rendering in the future.
