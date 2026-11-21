# Initial architecture

## Application style
- Independent static-first PWA shell
- Mobile-first responsive interface
- Modular workspace navigation
- Progressive enhancement: creative workspaces can be developed independently
- Provider adapters planned for future AI/image/video services

## Planned layers
1. Presentation: navigation, workspaces, forms, previews and responsive UI
2. Application logic: campaign workflows, validation and orchestration
3. Domain modules: brand profiles, campaign briefs, assets, prompts and outputs
4. Integration boundary: narrow server-side adapter for approved UmBrage data
5. Provider adapters: AI text, image and video providers

## Planned workspaces
- Brand Intelligence
- Creative Director
- Quick Campaign
- Visual Studio
- Video Studio
- Content Studio
- Growth Studio
- Campaign Library
- UmBrage Connection

## Data separation
Nexum-owned data must be stored in Nexum's own project/database.
UmBrage data remains owned by UmBrage. Any read access must pass through a
controlled integration contract and field allowlist.

## Current implementation
This starter contains only the presentation shell and placeholder navigation.
No backend, database, authentication, AI API, or UmBrage integration exists yet.
