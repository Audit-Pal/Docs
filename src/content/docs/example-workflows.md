# Example Workflows

## # Workflow 1: Subscribing a Deployed Contract for Monitoring

## Introduction
This workflow is for a protocol team that has just deployed a contract and wants Continuous Security Agents watching it from that point forward.


**Step 1: Authenticate your workspace**
Log in to your AuditPal account and navigate to the dashboard at subnet.auditpal.io. Connect your wallet to verify ownership of the deployer address or an authorised team address.


**Step 2: Add the contract**
From the dashboard, select "Add Contract." Paste the deployed contract address and select the chain it lives on. AuditPal supports all major EVM-compatible chains. If the contract is verified on the block explorer, AuditPal will pull the source automatically. If not, paste the ABI or upload the source files manually.


**Step 3: Configure alert thresholds**
Choose what you want to be alerted on. The default profile covers critical and high-severity findings only. You can expand this to include medium-severity findings, new attack patterns that match your contract's function signatures, or anomalies in on-chain behaviour such as unusual call patterns or unexpected state changes.


**Step 4: Set notification channels**
Connect at least one notification channel: email, Slack, Telegram, or webhook. For production contracts managing significant TVL, connecting multiple channels is recommended.


**Step 5: Activate monitoring**
Hit "Activate." From this point, Continuous Security Agents begin cross-referencing your deployed bytecode against the live attack database. Your contract is now in the monitoring queue and will be re-evaluated each time a new exploit pattern is added to the database or a relevant on-chain anomaly is detected.

**What happens next:** If a credible risk surfaces, you receive a high-signal alert with a description of the finding, the relevant function or state affected, the attack pattern it matches, and a severity classification. No noise. Only findings the scoring engine has validated.

## # Workflow 2: Running a Local Benchmark Against Solbench-30

This workflow is for a miner or security researcher who wants to test their agent locally before submitting it to the subnet.


**Step 1: Clone the benchmark repository**
```bash
git clone github.com/Audit-Pal/auditpal-subnet
cd auditpal-subnet
```


**Step 2: Install dependencies**
```bash
pip install -r requirements.txt
```


**Step 3: Point the benchmark at your agent**
Place your agent file at `agents/agent.py`. The agent must accept a contract context JSON as input and return a structured findings JSON as output. The expected schema is documented in `/docs/agent-spec.md`.


**Step 4: Run Solbench-30**
```bash
python benchmark.py --suite solbench-30 --agent agents/agent.py
```

The benchmark will run your agent against the 30 current vulnerability cases, score it on F1 detection accuracy, severity classification, and schema compliance, and print a summary report.


**Step 5: Review your results**
Your output will show a score breakdown across the three scoring dimensions: F1 score (70%), severity classification accuracy (20%), and schema validation (10%). It will also show which specific cases your agent caught, which it missed, and where it produced false positives.

Use this output to iterate before submitting. A score above the current subnet leaderboard baseline means your agent is competitive for reward eligibility.

## # Workflow 3: Submitting a New Agent to the Subnet

This workflow is for a miner ready to submit an agent after local testing.


**Step 1: Prepare your repository**
Your repository must follow this structure:
```
your-agent-repo/
  agents/
    agent.py        # entry point, required
  requirements.txt  # dependencies
  README.md         # description of your approach
```
The `agent.py` file must implement the standard AuditPal agent interface. On execution it receives the analysis input JSON and must return vulnerability findings in the validated schema format.


**Step 2: Push to a public repository**
Push your agent repository to GitHub. The validator will clone this repository into its sandbox during evaluation, so the repository must be publicly accessible.


**Step 3: Register your agent on the subnet dashboard**
Navigate to the Miners section of `subnet.auditpal.io`. Connect your Bittensor wallet. Paste your repository URL and submit.


**Step 4: Pass security screening**
Before execution, each agent goes through a manual security screening process. The validator reviews the agent code to ensure it does not contain malicious behaviour, exfiltration logic, or attempts to manipulate the sandbox environment.


**Step 5: Agent execution and scoring**
Once cleared, the validator cryptographically hashes your agent code for auditability, then runs it against the current benchmark suite. Your score is recorded on the leaderboard. If your agent outperforms the current top performer on the benchmark, you capture the reward for that cycle.


**Step 6: Monitor your standing**
Check your agent's performance history from the dashboard. You can see your score trajectory, which benchmark cases you are winning and losing, and where challenger agents are closing the gap.

## # Workflow 4: Using the Auditor Co-Pilot During an Engagement

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
