# SVGR

Date: YYYY-MM-DD

Status: accepted

## Context

the project heavily relies on SVG files for icons and graphics. However, managing these SVGs directly within the React codebase has become cumbersome and less maintainable. SVGR presents itself as a compelling solution due to its ability to transform SVG files into React components, offering easier integration, manipulation, and optimization of SVGs within the project.

## Decision

Following careful evaluation, the decision has been made to adopt SVGR as the tool for handling SVG files in our React project. SVGR's capability to convert SVGs to React components directly aligns with our goal of streamlining the integration process and enabling straightforward manipulation of SVGs using React's component-based approach. Its support for customizable configurations and optimizations further solidified this decision.

## Consequences

The integration of SVGR is expected to yield several positive outcomes for our development workflow. It anticipates a significant reduction in the complexity of managing SVGs within our React components, enabling easier manipulation and allowing for dynamic changes in SVGs while maintaining scalability. However, there might be a short-term impact on development velocity as the team adapts to using SVGR and refactors existing SVG usage. In the long term, leveraging SVGR is anticipated to improve maintainability and performance by optimizing SVGs and simplifying their usage across the application.
