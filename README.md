# Scaffolding Templates

My personal collection of scaffolding templates.

## Common libraries/approaches

1. Ky
2. React Hook Form / Remix Hook Form
3. Zod
4. i18next
5. i18next-browser-languagedetector
6. react-i18next
7. @testing-library
8. Vitest
9. TypeScript
10. Prettier
11. ESLint
12. Husky
13. shadcn-ui
14. Tailwind
15. MSW

### Currently evaluating

1. Playwright vs Cypress (Leaning towards Cypress due to Developer experience wins)

### Things to consider adding on your own for React projects

1. Monitoring/logging
2. Feature Flagging

### Deployment setup

I am currently using Vercel for my personal projects but I recognize that not every team can use it due to company constraints. In general here's what I recommend : 

#### SSR

- CDN for Static assets (Cloudfront, Fastly, etc) for static directory
- Server for SSR (Kubernetes, ECS, etc)
- Web Application Firewall (Cloudflare, AWS WAF, etc)
- DNS Resolution + Alising (Route53, Cloudflare, etc)

Domain -> DNS -> CDN -> WAF -> Server

#### CSR/Static

- CDN for Static assets (Cloudfront, Fastly, etc) for static directory
- Host static files on S3 or similar
- Web Application Firewall (Cloudflare, AWS WAF, etc)
- DNS Resolution + Alising (Route53, Cloudflare, etc)

Domain -> DNS -> CDN -> WAF -> S3

Will add Cookiecutter to help facilitate starting new projects along with a CLI to help manage the templates.

https://github.com/cookiecutter/cookiecutter