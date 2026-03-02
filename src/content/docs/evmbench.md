# OpenAI EVMbench

## Competitive Evaluation Environment

**EVMbench** is an open evaluation environment for EVM auditing agents. It provides a standardized way to measure and compare audit agent performance across the ecosystem.

## Relationship to SolBench-30

| Aspect | SolBench-30 | EVMbench |
|--------|-------------|----------|
| **Purpose** | Subnet miner evaluation | Cross-ecosystem benchmarking |
| **Scope** | 30 curated vulnerabilities | Growing open benchmark set |
| **Access** | Subnet validators only | Open to all tools |
| **Focus** | Bittensor-specific scoring | Universal agent comparison |

## How It Works

EVMbench provides a standardized test harness that any auditing tool can plug into:

1. **Submit** your agent or tool to the benchmark
2. **Run** against the standardized vulnerability suite
3. **Score** automatically calculated using accuracy, noise, and proof metrics
4. **Compare** your results against the community leaderboard

## Evaluation Criteria

```
Score = Detection Rate × (1 - False Positive Rate) × Proof Coverage

Where:
  Detection Rate    = Found Vulns / Total Vulns
  False Positive    = False Findings / Total Findings
  Proof Coverage    = Proven Findings / Detected Findings
```

## Why It Matters

EVMbench creates accountability in the audit tool space. Instead of marketing claims, tools are measured against **objective, reproducible benchmarks** using real-world vulnerability patterns.

## Categories Covered

- Reentrancy (single, cross-function, cross-contract, read-only)
- Access control violations
- Oracle manipulation and price feed attacks
- Integer overflow/underflow and precision loss
- Flash loan attack vectors
- Governance manipulation
- Front-running and MEV-related vulnerabilities

## Access

EVMbench is accessible via the [AuditPal platform](https://app.auditpal.io/benchmark/solidity-suite) and is integrated into the optimization workspace for interactive benchmarking.
