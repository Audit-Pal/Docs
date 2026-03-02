# Multi-Chain Expansion

## Support for Rust and Move Ecosystems

AuditPal is expanding beyond Solidity to cover the broader smart contract landscape, starting with **Rust** (Solana, NEAR, CosmWasm) and **Move** (Aptos, Sui).

## Expansion Roadmap

| Phase | Chain Ecosystem | Language | Status |
|-------|----------------|----------|--------|
| Phase 1 | Ethereum, BSC, Polygon, Arbitrum | Solidity | ✅ Live |
| Phase 2 | Solana | Rust (Anchor) | 🔄 In Progress |
| Phase 3 | NEAR, CosmWasm | Rust | 📋 Planned |
| Phase 4 | Aptos, Sui | Move | 📋 Planned |

## Why Multi-Chain?

Different chains have different vulnerability patterns:

### Solidity (EVM)
- Reentrancy, access control, oracle manipulation
- Well-established patterns with extensive exploit history

### Rust (Solana)
- Account validation attacks, PDA manipulation
- Cross-program invocation (CPI) vulnerabilities
- Instruction data deserialization issues

### Move (Aptos/Sui)
- Resource management vulnerabilities
- Module upgrade attacks
- Object ownership issues

## Technical Approach

Each new chain requires:

1. **New parser** — Language-specific AST extraction
2. **New state simulator** — Chain-specific execution model
3. **New benchmarks** — Chain-specific vulnerability suites
4. **New proof format** — Chain-native test frameworks

The subnet architecture means the expansion is **additive** — new chain support doesn't break or slow down existing EVM support.

## For Miners

Multi-chain expansion creates new opportunities for subnet miners. Agents that support multiple chains can compete across a wider benchmark surface, earning more rewards.
