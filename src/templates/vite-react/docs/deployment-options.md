### Deployment setup

I am currently using Vercel for my personal projects but I recognize that not every team can use it due to company constraints. In general here's what I recommend :

#### CSR/Static

- CDN for Static assets (Cloudfront, Fastly, etc) for static directory
- Host static files on S3 or similar
- Web Application Firewall (Cloudflare, AWS WAF, etc)
- DNS Resolution + Aliasing (Route53, Cloudflare, etc)

Domain -> DNS -> CDN -> WAF -> S3

#### SSR

- CDN for Static assets (Cloudfront, Fastly, etc) for static directory
- Server for SSR (Kubernetes, ECS, etc)
- Web Application Firewall (Cloudflare, AWS WAF, etc)
- DNS Resolution + Aliasing (Route53, Cloudflare, etc)

Domain -> DNS -> CDN -> WAF -> Server
