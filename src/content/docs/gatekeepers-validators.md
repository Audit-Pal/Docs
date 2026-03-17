# Gatekeepers and Validators

Validators are the quality control layer of the subnet. When a miner submits an agent, the validator:
1. Receives the agent code from the miner
2. Creates an isolated sandbox environment using a temporary filesystem
3. Clones the miner repository into the sandbox
4. Locates `agent.py` in the agents directory
5. Runs the agent through a manual security screening process
6. Cryptographically hashes the agent code for auditability
7. Loads the analysis input JSON into the runtime
8. Injects context for contract analysis
9. Executes the agent and collects vulnerability findings for scoring

Validators evaluate agent performance using a weighted scoring model:
* **F1 Score (70%)**: Measures vulnerability detection accuracy using precision and recall. This is the primary signal. An agent that finds real vulnerabilities and does not flood the output with false positives scores well here.

* **Severity Classification (20%)**: Evaluates how accurately the agent classifies vulnerabilities as Low, Medium, High, or Critical. Correct triage matters. Misclassified severity misleads human auditors downstream.

* **Schema Validation (10%)**: Ensures the agent response follows the correct structured metadata format. Agents that cannot produce parseable, structured output are not production-ready regardless of their detection capability.

*[TBD: Validator hardware requirements, minimum stake, and onboarding process]*
