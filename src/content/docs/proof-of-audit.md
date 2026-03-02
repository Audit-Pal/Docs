# Proof of Audit Incentive Model

## Rewarding Quality, Not Quantity

The Proof-of-Audit model is AuditPal's custom incentive mechanism for the Bittensor subnet. It ensures that miners are rewarded for producing **accurate, low-noise, proof-backed** findings — not just volume.

## Scoring Dimensions

| Dimension | Weight | What It Measures |
|-----------|--------|-----------------|
| **Accuracy** | 40% | Correct identification of real vulnerabilities |
| **Noise Ratio** | 25% | Penalty for false positives (lower is better) |
| **Latency** | 20% | Time to produce findings |
| **Proof Quality** | 15% | Validity and completeness of executable proofs |

## How It Works

1. **Validators** issue audit tasks containing benchmark contracts (from SolBench-30)
2. **Miners** respond with findings, each backed by an executable proof
3. **Validators score** each response against the four dimensions above
4. **Weights are updated** — higher-scoring miners receive proportionally more TAO rewards

```
Validator issues task → Miner responds with findings
                   → Validator scores accuracy + noise + latency + proof
                   → Weight update → TAO emission distribution
```

## Anti-Gaming Protections

- **Benchmark rotation** — Validators cycle through different contracts to prevent memorization
- **Novel challenges** — Periodic injection of never-seen-before contracts
- **Cross-validation** — Multiple validators independently score the same response
- **Noise penalty** — Heavy penalty for false positives discourages spray-and-pray tactics

> The system is designed so that the only winning strategy is to build a genuinely good audit agent.

## Economic Model

Top-performing miners earn proportionally higher TAO rewards, creating a flywheel:

1. Better agents → higher rewards → more investment in agent quality
2. More competition → better benchmarks → higher security standards
3. Higher standards → more developer trust → larger market → more rewards
