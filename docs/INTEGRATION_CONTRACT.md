# UmBrage Level 2 integration contract — draft

This document describes a future boundary. It is not an implementation.

## Allowed direction
UmBrage -> The Nexum (read-only)

## Candidate data, subject to approval
- Brand name and approved brand description
- Approved logo/brand asset references
- Product title and approved description
- Product category
- Approved colour/material/size details
- Approved product images or safe asset references
- Optional public-facing price fields, only if explicitly approved

## Excluded by default
- Customer personal data
- Private conversations and message histories
- Orders and delivery details
- Payment, balances, profit, cost and other financial records
- Authentication secrets and internal staff records
- Any write or delete operation

## Required controls before implementation
- Exact source tables/views/API identified
- Field-level allowlist approved
- Dedicated least-privilege read-only integration identity
- Server-side credential handling
- Authentication and business-scope checks
- Audit logging and rate limits
- Failure isolation and safe fallback
- Dependency review and explicit approval

No UmBrage code, schema, policies, functions or operational workflows may be
changed as part of this draft contract.
