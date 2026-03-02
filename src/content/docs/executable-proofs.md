# Executable Proof System

## Proof-Backed Findings

Every vulnerability AuditPal identifies comes with an **executable proof** — a script that demonstrates the exploit in a forked environment. If the proof runs, the vulnerability is real. No exceptions.

> Zero false positives. Every finding is mathematically verified.

## Why Executable Proofs?

- **Zero false positives** — If the proof runs, the vulnerability is real
- **Clear communication** — Developers can see exactly how the exploit works
- **Reproducibility** — Anyone can verify the finding independently
- **Severity validation** — Proofs demonstrate actual impact, not theoretical risk
- **Audit confidence** — Auditors can present findings with mathematical certainty

## Proof Generation Workflow

```
┌─────────────────────────────────────────┐
│  1. Static Analysis                     │
│     Identify potential vulnerability    │
├─────────────────────────────────────────┤
│  2. State Simulation                    │
│     Model the contract state space      │
├─────────────────────────────────────────┤
│  3. Exploit Construction                │
│     Build adversarial transaction seq.  │
├─────────────────────────────────────────┤
│  4. Forked Execution                    │
│     Run exploit on forked mainnet       │
├─────────────────────────────────────────┤
│  5. Assertion Verification              │
│     Confirm exploit achieves impact     │
└─────────────────────────────────────────┘
```

## Example: Reentrancy PoC (Foundry)

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";

contract ReentrancyPoC is Test {
    VulnerableVault vault;
    Attacker attacker;

    function setUp() public {
        // Fork mainnet at specific block
        vm.createSelectFork("mainnet", 18500000);

        vault = VulnerableVault(0xVAULT_ADDRESS);
        attacker = new Attacker(address(vault));

        // Fund attacker with 1 ETH
        vm.deal(address(attacker), 1 ether);
    }

    function test_reentrancy_drain() public {
        uint256 vaultBalanceBefore = address(vault).balance;

        // Execute attack
        attacker.attack{value: 1 ether}();

        // Verify: attacker drained the vault
        assertGt(address(attacker).balance, 1 ether);
        assertLt(address(vault).balance, vaultBalanceBefore);
    }
}
```

## Proof Structure

Each proof includes:

| Component | Description |
|-----------|-------------|
| `setup` | Fork environment and initial state configuration |
| `steps` | Ordered sequence of transactions to execute |
| `assertion` | Condition that proves the exploit succeeded |
| `impact` | Quantified damage (e.g., "Complete fund drainage") |
| `severity` | Critical / High / Medium / Low classification |

## Framework Compatibility

Proofs are automatically generated during state simulation and can be exported as standalone test files compatible with:

- **Foundry** — Native Solidity test format (recommended)
- **Hardhat** — JavaScript/TypeScript test with ethers.js
- **Brownie** — Python-based testing framework

## Integration

Executable proofs are generated automatically when miners on the Bittensor subnet identify vulnerabilities. They can be:

1. **Viewed** directly in the [AuditPal platform](https://app.auditpal.io) audit reports
2. **Downloaded** as standalone test files
3. **Shared** with development teams as verified, reproducible evidence
