# Repository Policies

This document collects the working policies for this repository, numbered in the order they are defined.

Spanish version: [esp.md](esp.md)

---

## Policy 1 — Branching and merging

From now on, no work is done directly on `main`. For any change (feature, fix, experiment, etc.) you must:

1. Create a new branch off `main`, with a name that describes the work (e.g. `fix-mongo-connection`, `feature-newsletter`).
2. Do the work and commits on that branch.
3. When opening the PR, describe in detail the changes made on the branch and ask for permission before merging. Never merge without permission.
4. Once finished and tested, merge the branch into `main`.

Never commit or push directly to `main`.
