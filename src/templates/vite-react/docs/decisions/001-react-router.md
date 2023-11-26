# React Router

Date: 2023-11-26

Status: accepted

## Context

Most web applications require routing to navigate between pages. React Router is the most popular routing library for React applications. It is well maintained by the Remix team and has a large community.

## Decision

I recommend using React Router for routing in React applications. Remix is inherently built on top React Router and thus, React Router provides the most seamless migration path to SSR with Remix if there is a need for that rendering strategy in the future.

## Consequences

Developers will need to learn React Router. However, the APIs are fairly intuitive and the documentation is excellent.
