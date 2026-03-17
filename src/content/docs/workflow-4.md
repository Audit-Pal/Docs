# Workflow 4: Using the Auditor Co-Pilot During an Engagement

## Introduction
This workflow is for a human auditor running an engagement on a new protocol.


**Step 1: Create an engagement workspace**
Log in and create a new engagement. Give it a name and attach the contract files or repository URL. AuditPal will index the codebase and map all functions, state variables, inheritance chains, and external call dependencies.


**Step 2: Review the automated pre-scan**
Before you begin your manual review, the Co-Pilot runs an automated pre-scan and surfaces initial findings: known vulnerability patterns matched against the codebase, access control structures flagged for review, and external integrations that have historically been attack vectors in similar protocols. This is your starting map, not your conclusion.


**Step 3: Dig into functions with Co-Pilot assistance**
Select any function in the codebase. The Co-Pilot will show you relevant historical hacks involving similar patterns, simulate edge cases across the function's logic branches, and flag any conditions where the function behaves unexpectedly under adversarial inputs.


**Step 4: Run governance and upgrade path simulations**
For protocols with governance mechanisms or upgradeability, use the edge-case simulation engine specifically on those flows. The Co-Pilot stress-tests time locks, quorum thresholds, propose-execute sequences, and proxy upgrade logic against conditions commonly exploited in past governance attacks.


**Step 5: Cross-check deployed bytecode**
If the contract is already deployed, paste the deployment address. The Co-Pilot compares the deployed bytecode against the reviewed source to verify they match. Discrepancies between what was audited and what is actually running on-chain are flagged immediately.


**Step 6: Triage and prioritise findings**
The Co-Pilot consolidates findings and ranks them by exploitability and severity. Work through the prioritised list, adding your own reasoning, economic context, and protocol-specific judgment at each step. The Co-Pilot surfaces the evidence. You own the conclusion.


**Step 7: Export for reporting**
When your review is complete, export the finding set in your preferred format for inclusion in the final report. The Co-Pilot does not sign the report. You do.
