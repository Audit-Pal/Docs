# State Machine Simulation

## Full State Space Modeling

AuditPal models the **complete state space** of smart contracts, including all possible state transitions, storage mutations, and inter-contract interactions. This isn't pattern matching — it's exhaustive exploration.

## How It Works

1. **Static analysis** extracts the contract's state variables and transition functions
2. **Symbolic execution** maps all reachable states and transition paths
3. **Adversarial simulation** tests state transitions under attack conditions
4. **Invariant checking** verifies that critical properties hold across all states
5. **Proof generation** produces executable exploits for any violated invariants

## Why Full State Modeling Matters

Traditional scanners look for known patterns. AuditPal explores what's **possible**:

| Traditional Scanners | AuditPal State Simulation |
|---------------------|--------------------------|
| Match known patterns | Explore all possible states |
| Check syntax | Verify runtime behavior |
| Flag potential issues | Demonstrate actual exploits |
| Miss novel attacks | Discover unknown vectors |

## Example

```solidity
// AuditPal automatically identifies that this state transition
// can be exploited through reentrancy
function withdraw(uint amount) external {
    require(balances[msg.sender] >= amount);
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success);
    balances[msg.sender] -= amount;  // State update after external call
}
```

AuditPal's simulator will:
1. Model `balances` as a state variable
2. Identify the external call as a state transition point
3. Detect that `balances` update occurs **after** the external call
4. Simulate a reentrant callback scenario
5. Generate a Foundry PoC proving the vulnerability

## State Graph Visualization

The simulation produces a **state transition graph** that auditors can reason about visually:

```
[Initial State]
    │
    ├─── deposit() → [Funded State]
    │                      │
    │                      ├─── withdraw() → [External Call]
    │                      │                      │
    │                      │                      ├─── (reentr.) → [Exploited]
    │                      │                      │
    │                      │                      └─── (normal) → [Updated]
    │                      │
    │                      └─── transfer() → [Transferred State]
    │
    └─── (no action) → [Empty State]
```

## Benefits

- **Complete coverage** — No state left unexplored
- **Adversarial perspective** — Every transition tested under attack conditions
- **Visual output** — State graphs that auditors can reason about
- **Proof linkage** — Any exploitable path automatically generates a PoC
