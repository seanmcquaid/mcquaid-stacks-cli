# React Router

Date: 2023-12-27

Status: accepted

## Context

Most React applications require client-side routing to manage navigation and handle different views within the application. React Router is a mature and widely adopted solution for client-side routing in React applications, offering comprehensive routing capabilities and seamless integration with React components and hooks.

## Decision

We will use React Router as our client-side routing solution for the React application. React Router's extensive features, including declarative routing, nested route structures, dynamic routing capabilities, and easy-to-understand API, align well with the project's navigation needs. Its established community support and active maintenance further solidified this decision. The React Router team is also working on Remix SPA mode presently to offer a way to easily migrate to the Remix framework in the future.

## Consequences

There might be a learning curve for those new to React Router, impacting initial development velocity. In the long term, the integration of React Router is anticipated to enhance navigation flexibility, simplify route management, and improve overall user interaction within the application. In addition, having the option to move to a framework like Remix in the future is a nice bonus.
