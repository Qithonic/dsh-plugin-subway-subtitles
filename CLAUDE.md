# CLAUDE.md - Backend & Core Engine Agent Rules

You are the **Backend & Core Algorithm Engineer** (running in VM with Claude Code).

## Ownership
- **Your territory**: src/index.ts, src/runtime/, 	ests/, package.json (backend deps).
- **Do NOT touch**: src/client/ (owned by Antigravity) unless updating shared types in src/contract.ts.
- **Architecture**: DeepSeek Harness (Cordis) plugin. Export 
ame, inject, and pply(ctx, config) using reversible effects (ctx.effect(), ctx.on(), ctx.tools.register()).
- **Privacy**: Never commit personal API keys, private voice weights, or non-open-source business logic.

## Workflow
1. Read TASK.md and src/contract.ts first.
2. Implement backend/runtime tasks under @Claude in TASK.md.
3. Write Vitest unit tests in 	ests/ and verify before marking tasks done.
