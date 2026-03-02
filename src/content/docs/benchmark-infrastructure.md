# Benchmark Infrastructure

## Live Evaluation Systems for Audit Agent Performance

AuditPal's benchmark infrastructure provides the foundation for measuring, comparing, and improving audit agent quality across the ecosystem.

## Components

### SolBench-30
The gold standard vulnerability benchmark — 30 curated, high-impact vulnerabilities from real-world smart contracts. Used by subnet validators as the primary evaluation tool.

[Learn more about SolBench-30 →](/docs/solbench-30)

### EVMbench
An open competitive evaluation environment for any EVM auditing tool. Standardized scoring across detection rate, false positive rate, and proof coverage.

[Learn more about EVMbench →](/docs/evmbench)

### Optimization Challenges
Community-driven competitive challenges where auditors and developers optimize contracts for gas efficiency while maintaining security.

## Evaluation Pipeline

```
Contract Suite → Agent Analysis → Automated Scoring → Leaderboard
                                        │
                                  ┌─────┴─────┐
                                  │            │
                            Accuracy     Noise Ratio
                            Detection    Proof Quality
                            Latency      Completeness
```

## Why Benchmarks Matter

| Without Benchmarks | With Benchmarks |
|-------------------|----------------|
| "Our tool is the best" (marketing claim) | "Our tool scores 94.2 on SolBench-30" (verifiable) |
| No way to compare tools | Standardized comparison |
| Quality improvements unmeasurable | Progress tracked over time |
| Users choose based on brand | Users choose based on data |

## Access

All benchmark results are public and accessible through:
- The [AuditPal platform](https://app.auditpal.io/benchmark/solidity-suite)
- The [Subnet Console](https://console.auditpal.io) for validator/miner metrics
