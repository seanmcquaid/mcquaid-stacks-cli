# Mock Service Worker + Faker

Date: 2023-11-26

Status: accepted

## Context

Managing server state is one of the toughest things to get right modern web development. Tanstack Query (formerly React Query) is a library for managing, caching, synchronizing and updating server state in React applications. It is also framework agnostic so you can use it with any framework that supports React Hooks.

## Decision

I highly recommend that you use Tanstack Query for managing server state in your React applications. If you have a need for a tool like Redux, then I would encourage you to use Redux Toolkit Query instead so you don't need the extra dependency.

## Consequences

The only consequence of Tanstack Query is that you will need to learn some fundamental patterns about how to cache data properly that are specific to Tanstack Query. However, once you learn these patterns, you will be able to apply them to any other application that uses Tanstack Query easily.
