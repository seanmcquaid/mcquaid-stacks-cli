# Testing Strategy

Testing front-end applications is a complex topic. There are many different types of tests that can be written, and each has its own strengths and weaknesses. The key is to find the right balance between the different types of tests to ensure that the application is both well-tested and maintainable. In general, here's what I recommend :

- Unit Tests for components, hooks, utils, pages, etc. - If a component ends up navigating to another page and you want to test behavior after that navigation, I would recommend likely testing that in an integration test in the browser instead.
- Integration Tests with mocked APIs for happy path flows
- End-to-End Tests with real APIs for high level user flows
