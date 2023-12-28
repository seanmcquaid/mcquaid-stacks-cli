# React Hook Form

Date: 2023-12-27

Status: accepted

## Context

Form validation and state management is a common requirement for web applications. You can definitely build your own solutions for this but there are a lot of libraries out there that handle this for you with significantly less code.

## Decision

I recommend utilizing React Hook Form for form validation and state management along with Zod in your web applications. It is primarily hook based, has a set of resolvers that you easily pivot to in the event Zod loses support, and is very well maintained.

## Consequences

The main consequence of using React Hook Form is that if you need client side form validation, this is really the only way you should be doing it. However, migration away from React Hook Form should not be too difficult in the event you decide to pivot to something later on.
