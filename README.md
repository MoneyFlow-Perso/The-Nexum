# The Nexum — Foundation V1.0

**An UmBrage Creation**  
The Creative & Growth Ecosystem

## What this package is

An isolated, frontend-only foundation preview for The Nexum. It includes:
- Responsive desktop and Android navigation
- The approved 11-section information architecture
- UmBrage workspace selector preview
- Overview dashboard with clearly marked non-live metrics
- Creative workflow and roadmap preview
- Placeholder routes for planned modules
- PWA manifest and basic offline shell caching
- No backend connection, database writes, authentication, or external integrations

## Safety boundary

This package does not contain or modify:
- Existing UmBrage application files
- Existing Supabase tables, policies, RPCs or Edge Functions
- WhatsApp, CRM, Reply Intelligence or customer workflows
- API keys, passwords, access tokens or service-role credentials

It is designed to be deployed in a **new, separate GitHub repository**. Do not upload it over the existing UmBrage repository.

## Run locally

Open `index.html` in a browser for a basic preview. PWA installation and service-worker caching require HTTPS or localhost.

## Deploy safely

1. Create a new GitHub repository named `the-nexum` (or another available name).
2. Upload the contents of this folder to the new repository root.
3. Enable GitHub Pages for the repository's main branch.
4. Open the new Pages URL and test on Android Chrome.
5. Keep the existing UmBrage repository and deployment unchanged.

## Current limitations

The navigation is a foundation preview; module pages, brand creation, persistent data, authentication, AI generation, publishing and analytics are not implemented yet. Metrics intentionally show dashes rather than fabricated values.

## Next milestone

Build the multi-brand engine and Brand Library only after reviewing the foundation preview and confirming the interface direction.
