# Application Layer

## The application layer is what protocols and teams interact with directly
It has one surface, but it spans the full contract lifecycle from development to continuous post-launch auditing.

### Pre-launch
Before a contract goes live, teams subscribe to their testnet contract address. The Continuous Security Agent audits the codebase, flags vulnerabilities by severity, and surfaces findings before they can be exploited in production.

### Post-launch
Once the contract is on mainnet, the agent keeps running. It cross-references deployed bytecode against the live attack database around the clock and alerts teams the moment something critical appears. Auditing does not stop at launch; it continues as long as the contract is live.
