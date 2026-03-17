# Workflow 2: Running a Local Benchmark Against Solbench-30

## Introduction
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
