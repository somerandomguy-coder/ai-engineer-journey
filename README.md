# 🎓 AI Engineer Journey

A personal repository to track progress on AI agent courses, log key insights, and store a searchable collection of code snippets and engineering patterns.

---

## 🗺️ Roadmap & Progress

- **Anthropic Course Series**
  - [x] [Claude Code in Action](./claude/claude-code-in-action/README.md) — *Status: Completed*
  - [/] [Introduction to Claude Cowork](./claude/introduction-to-claude-cowork/README.md) — *Status: In Progress*
  - [ ] Building with the Claude API — *Status: Planned*
  - [ ] AI Fluency: Framework & Foundations — *Status: Planned*

---

## 🔍 How to Grep Snippets

All code snippets and CLI recipes are documented directly in the course-specific directories. They are tagged with a standard tag: `#snippet: <description>`.

To quickly grep for all snippets or specific keywords from the project root:

```bash
# Find all snippets
rg "#snippet:"

# Search for a specific snippet keyword (e.g. "ignore")
rg "#snippet:.*ignore" -A 10
```