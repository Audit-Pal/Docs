# Auditor Co-Pilot Workspace

## Your AI-Powered Audit Environment

The Co-Pilot Workspace is the application layer where auditors interact with AuditPal. It's designed to feel like a familiar development environment while providing powerful AI-assisted audit capabilities.

> Think of it as an IDE built specifically for smart contract security.

## Core Features

### 🖥️ Code Editor

A full-featured Monaco-based code editor with:

- **Syntax highlighting** for Solidity, Vyper, and related languages
- **Inline annotations** marking detected vulnerabilities with severity badges
- **Go-to-definition** navigation across contract imports
- **Diff view** for comparing original vs. optimized code

### 🔍 Vulnerability Panel

Real-time findings displayed alongside your code:

- Severity classification (Critical / High / Medium / Low / Info)
- Detailed descriptions with impact analysis
- One-click navigation to the affected line
- Executable proof status indicator

### 📊 Analytics Dashboard

After each audit:

| Metric | Description |
|--------|-------------|
| Security Score | Overall contract safety rating (0-100) |
| Gas Optimization | Identified gas savings opportunities |
| Findings Breakdown | Critical / High / Medium / Low counts |
| Proof Coverage | Percentage of findings with executable proofs |

### 🏆 Optimization Challenges

The workspace includes a competitive benchmarking mode:

- Submit optimized contract versions
- Compare gas costs against other submissions
- Leaderboard ranking across the community
- Earn reputation and recognition

## Workflow

```
┌──────────────────────────────────────┐
│  1. Submit Contract                   │
│     Paste or upload Solidity code     │
├──────────────────────────────────────┤
│  2. AI Analysis                       │
│     Multiple agents analyze in        │
│     parallel via Bittensor subnet     │
├──────────────────────────────────────┤
│  3. Review Findings                   │
│     Browse annotated results in       │
│     the workspace editor              │
├──────────────────────────────────────┤
│  4. Verify Proofs                     │
│     Run executable proofs to          │
│     confirm each vulnerability        │
├──────────────────────────────────────┤
│  5. Export Report                     │
│     Download professional audit       │
│     report with all findings          │
└──────────────────────────────────────┘
```

## Authentication

The workspace supports two authentication methods:

- **Email/OAuth** — Traditional login via Google, GitHub
- **Solana Wallet** — Connect with Phantom, Solflare, or any Solana wallet

## Access

Try the workspace at [app.auditpal.io](https://app.auditpal.io). Start with a free audit to see the co-pilot in action.
