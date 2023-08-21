# React + Vite CSR Template

My personal React + Vite Client Side Rendered Template I use for all new personal web projects that I just want to use a SPA for.

## To Set Up In AWS

1. Register a new domain in Route 53 (For example, "mcquaid-apps.com")
2. Opt to create a Route 53 Hosted Zone for this new Domain
3. Create a ACM Certificate with DNS validation for that new domain following this pattern : \*.mcquaid-apps.com
4. Add the certificate CNAME entry in the ACM console to the associated public hosting zone

Don't forget to add secrets for GHA to the repo for the following:

1. AWS_ACCESS_KEY_ID
2. AWS_CERTIFICATE_ARN
3. AWS_CLOUDFORMATION_STACK_NAME
4. AWS_HOSTED_ZONE_ID
5. AWS_S3_BUCKET_NAME
6. AWS_SECRET_ACCESS_KEY
