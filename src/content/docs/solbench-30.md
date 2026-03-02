# AuditPal-Solbench-30

## The Gold Standard Benchmark

**Solbench-30** is a curated suite of 30 high-impact vulnerabilities from real-world Solidity smart contracts. It serves as the ground truth for evaluating audit agent performance on the Bittensor subnet.

> Every miner on the subnet is evaluated against Solbench-30. It's the single source of truth for audit quality.

## Design Principles

- **Real-world origin** — Every vulnerability comes from an actual exploit or audit finding
- **High impact** — Only critical and high-severity vulnerabilities are included
- **Diverse categories** — Covers reentrancy, access control, oracle manipulation, and more
- **Executable proofs** — Each vulnerability includes a working exploit script
- **Version-controlled** — Updated quarterly to reflect emerging attack vectors

## Vulnerability Categories

| Category | Count | Examples |
|----------|-------|---------|
| Reentrancy | 5 | Cross-function, cross-contract, read-only |
| Access Control | 4 | Missing modifiers, privilege escalation, unprotected init |
| Oracle Manipulation | 4 | Price manipulation, stale data, TWAP attacks |
| Logic Errors | 6 | Rounding, overflow, off-by-one, precision loss |
| Flash Loan Attacks | 3 | Governance manipulation, liquidation exploits |
| Other | 8 | Frontrunning, DOS, signature replay, storage collision |

## Scoring Methodology

Each miner's audit is scored across four dimensions:

| Dimension | Weight | Scoring Criteria |
|-----------|--------|-----------------|
| **Detection** | 40% | Did the agent identify the vulnerability? |
| **Severity** | 20% | Was the severity classification correct? |
| **Proof** | 25% | Is the exploit proof executable and valid? |
| **Noise** | 15% | Penalty for false positives in the report |

### Scoring Formula

```
Score = (Detection × 0.4) + (Severity × 0.2) + (Proof × 0.25) - (Noise × 0.15)
```

A perfect score requires identifying all 30 vulnerabilities with correct severity, valid proofs, and zero false positives.

## Example Challenge

**Challenge #7: Cross-Contract Reentrancy**

```solidity
// Vulnerable pattern: State update in Contract A
// after external call to Contract B
contract VaultA {
    mapping(address => uint) public shares;
    VaultB public vaultB;

    function withdraw() external {
        uint amount = shares[msg.sender];
        vaultB.processWithdrawal(msg.sender, amount); // External call
        shares[msg.sender] = 0; // State update AFTER call
    }
}
```

**Expected finding:** Cross-contract reentrancy via `processWithdrawal` callback. Agent must identify the interaction between two contracts and produce a PoC demonstrating fund drainage.

## Usage

Solbench-30 is used in two contexts:

1. **Subnet validation** — Validators use it to evaluate and rank miner agent performance
2. **Standalone benchmark** — Available as an open benchmark for any audit tool to measure against

## Access

The benchmark suite is available on GitHub and integrated into the [AuditPal platform](https://app.auditpal.io/benchmark/solidity-suite) for interactive evaluation.
