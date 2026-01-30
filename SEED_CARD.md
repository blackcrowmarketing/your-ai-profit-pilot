# ✈️ Project Seed Card: Your AI Profit Pilot

**Status:** Live & Automated 🟢
**URL:** https://youraiprofitpilot.com
**Repository:** `https://github.com/youraiprofitpilot/youraiprofitpilot`

## 🚀 Deployment Method: Self-Hosted Runner (Auto-Push)
This project uses a **GitHub Self-Hosted Runner** installed on the VPS.
- **Runner Path:** `/home/github-runner/profit-pilot-runner`
- **Service Name:** `actions.runner.youraiprofitpilot-youraiprofitpilot.srv1102146.service`
- **Workflow File:** `.github/workflows/deploy.yml`

## 🛠️ Tech Stack
- **Frontend:** React + Vite (Static Build)
- **Styling:** Tailwind CSS
- **Server:** Nginx (serving static files from `/var/www/youraiprofitpilot`)
- **VPS IP:** `82.29.190.177` (Port 2222)

## 🔄 How to Deploy Updates
1.  **User:** Provides PAT (Personal Access Token) at start of chat.
2.  **Manus:** Pushes code directly to GitHub `main` branch.
3.  **System:** Automatically deploys via the runner (approx. 2 mins).

## 📝 Quick Start for New Chat (The "Master Prompt")
Copy and paste this into the chat to start working:

> "Here is the context for this project.
>
> **Authentication:**
> Here is my Personal Access Token (PAT) for GitHub:
> `[PASTE_YOUR_GHP_TOKEN_HERE]`
>
> **Deployment Protocol:**
> *   This project uses a **Self-Hosted Runner** (already active).
> *   **You have full permission to PUSH code directly to the `main` branch.**
> *   Do NOT ask me to push manually. Just commit and push your changes.
> *   The runner will handle the deployment automatically.
>
> **Task:**
> [Insert your request here]"
