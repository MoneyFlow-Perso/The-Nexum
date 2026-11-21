# Security baseline

1. Never place API keys, service-role keys, database passwords, access tokens,
   or privileged credentials in frontend files or GitHub repositories.
2. Keep Nexum authentication and data storage independent from UmBrage.
3. Do not connect to UmBrage until the read-only contract is approved.
4. Validate all user input and uploaded file types/sizes on the server when
   backend functionality is introduced.
5. Treat AI output as untrusted until reviewed; never auto-publish by default.
6. Require human review for campaign assets and copy before external publishing.
7. Use original, non-identifiable AI model descriptions; avoid third-party
   trademarks, logos and copyrighted artwork.
8. Recommend only platform Commercial Audio Library tracks for commercial
   short-form video use.
9. Maintain clear distinction between draft, approved and published content.
10. Add backups, export and rollback procedures before persistent cloud data
    or production integrations are enabled.
