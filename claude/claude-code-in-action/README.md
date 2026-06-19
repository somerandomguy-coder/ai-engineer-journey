# 🎬 Claude Code in Action

Notes, key takeaways, and snippets from the **Anthropic - Claude Code in Action** course.

- **Course Link:** [Anthropic Course Platform](https://courses.anthropic.com/)
- **Status:** Completed ✅

---

## 💡 Key Insights & Takeaways

### 1. What is coding agent?
![alt text](image.png)

Put it simply coding agent is an llm that can perform tool calling to get the context it needed in order to fulfill user goal.

Important: Claude code doesn't index your codebase outside (like cursor i guess), it rely strongly on its tool use to explore the codebase. This help with security 

Claude default tool:
![alt text](image-1.png)

UI (playwright) tool:
![alt text](image-2.png)

```bash
claude mcp add playwright npx @playwright/mcp@latest
```
### Setup

You can find full setup instructions here: https://code.claude.com/docs/en/quickstart

In short, you'll need to do the following:

Install Claude Code
MacOS, Linux, WSL: curl -fsSL https://claude.ai/install.sh | bash
Windows PowerShell: irm https://claude.ai/install.ps1 | iex
Windows Command Prompt (cmd.exe): curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
MacOS (Homebrew): brew install --cask claude-code
After installation, run claude at your terminal. The first time you run this command you will be prompted to pick a color theme for the terminal and authenticate with your claude.ai credentials
If you get an error that claude isn't found after installing, or you hit a network or permissions error, see Troubleshoot installation issues in the docs.

Using Claude Code through Amazon Bedrock, Google Cloud Vertex AI, or Microsoft Foundry? See third-party provider setup for additional setup instructions.



### Basic Interaction

/init to start the project 
/memory to add things to the memory 

important: 
Double escape to rewind to old context in case you made a mistake or make too many debug interaction that might pollute the context


we can make custom command in like in "snippets\.claude\commands\write_tests.md"
Custom commands can accept arguments using the $ARGUMENTS placeholder. This makes them much more flexible and reusable.
then after that we can use it like this
```bash
/write_tests the use-auth.ts file in the hooks directory 
```


To extent claude tool, we can use mcp like
Open the .claude/settings.local.json file and add the server to the allow array like in example
"./snippets/.claude/settings.local.json"



### Github action
run this in claude to set up 
/install-github-app


Then claude can handle pull request, and mentioning (calling @claude) in github

Note: in yml file might need to enable these following

mcp_config: |
  {
    "mcpServers": {
      "playwright": {
        "command": "npx",
        "args": [
          "@playwright/mcp@latest",
          "--allowed-origins",
          "localhost:3000;cdn.tailwindcss.com;esm.sh"
        ]
      }
    }
  }

  allowed_tools: "Bash(npm:*),Bash(sqlite3:*),mcp__playwright__browser_snapshot,mcp__playwright__browser_click,..."


### Hooks

![alt text](image-3.png)

Run command before or after some tool calling. 

usual tool call data
![alt text](image-4.png)

