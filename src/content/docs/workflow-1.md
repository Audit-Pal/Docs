# Workflow 1: Subscribing a Deployed Contract for Monitoring

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
