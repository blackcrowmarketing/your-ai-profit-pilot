# Your AI Profit Pilot - Deployment Guide

## Overview

This project uses a **GitHub Actions self-hosted runner** for automated deployment to a custom VPS. The deployment workflow is triggered automatically when code is pushed to the `main` branch.

## Deployment Architecture

```
GitHub Repository (main branch)
         ↓
GitHub Actions Workflow (deploy.yml)
         ↓
Self-Hosted Runner (on VPS)
         ↓
Build & Package (pnpm build)
         ↓
Deploy to Production (PM2 restart)
```

## Prerequisites

### GitHub Secrets Configuration

Before the deployment workflow can run, you must configure the following secrets in your GitHub repository:

1. **VPS_HOST** - IP address of the VPS (e.g., `82.29.190.177`)
2. **VPS_USER** - SSH username (e.g., `root`)
3. **VPS_PASSWORD** - SSH password for the VPS user
4. **VPS_DEPLOY_DIR** - Deployment directory on VPS (e.g., `/var/www/youraiprofitpilot`)

### To Add Secrets:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each secret with the values above

## Deployment Workflow

### Automatic Deployment (Recommended)

1. **Make code changes** in your local repository
2. **Commit and push** to the `main` branch:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
3. **GitHub Actions automatically triggers** the workflow
4. **Monitor the deployment** in the Actions tab of your GitHub repository

### Manual Trigger (Optional)

If needed, you can manually trigger the workflow from GitHub:

1. Go to your repository → **Actions** tab
2. Select the **Deploy to Production** workflow
3. Click **Run workflow** → **Run workflow** button

## Workflow Steps

The `deploy.yml` workflow performs the following steps:

1. **Checkout** - Retrieves the latest code from the repository
2. **Setup Node.js** - Installs Node.js 22.13.0
3. **Setup pnpm** - Configures the package manager
4. **Cache Dependencies** - Uses pnpm cache for faster builds
5. **Install Dependencies** - Runs `pnpm install --frozen-lockfile`
6. **Build Application** - Executes `pnpm build` to create production bundle
7. **Create Archive** - Compresses the `dist` folder to `dist.tar.gz`
8. **Deploy to VPS** - Uploads archive and restarts PM2 process
9. **Verify Deployment** - Confirms successful deployment

## Environment Variables

The following environment variables are required during the build process. These should be configured on your self-hosted runner or passed via GitHub secrets:

### System-Provided (Auto-Injected by Manus)
- `DATABASE_URL` - MySQL connection string
- `JWT_SECRET` - Session cookie signing
- `VITE_APP_ID` - Manus OAuth app ID
- `OAUTH_SERVER_URL` - OAuth backend URL
- `VITE_OAUTH_PORTAL_URL` - OAuth login portal
- `OWNER_OPEN_ID` / `OWNER_NAME` - Owner info
- `BUILT_IN_FORGE_API_URL` / `BUILT_IN_FORGE_API_KEY` - Manus APIs
- `VITE_FRONTEND_FORGE_API_KEY` / `VITE_FRONTEND_FORGE_API_URL` - Frontend APIs
- `VITE_APP_TITLE` - "Your AI Profit Pilot"
- `VITE_APP_LOGO` - Logo URL

### Custom Configuration
- `GETRESPONSE_API_KEY` - GetResponse API authentication
- `GETRESPONSE_CAMPAIGN_ID` - Target email list
- `SOCIALFI_REGISTRATION_URL` - joinsocialfi.com/ai redirect

## Self-Hosted Runner Setup

### On Your VPS

1. **Install GitHub Runner** on the VPS at `82.29.190.177`
2. **Configure the runner** to listen for workflow jobs
3. **Ensure PM2 is installed** and running the `youraiprofitpilot` process
4. **Verify SSH access** with the credentials configured in GitHub Secrets

### Runner Configuration

The runner should be configured with:
- **Label**: `self-hosted` (used in `runs-on: self-hosted`)
- **Working directory**: `/home/runner/actions-runner`
- **Startup**: Configured to run as a service

## Deployment Troubleshooting

### Workflow Fails to Trigger

- **Check**: Push was made to `main` branch
- **Check**: GitHub Actions is enabled in repository settings
- **Check**: No branch protection rules blocking the workflow

### Build Fails

- **Check**: All dependencies are listed in `package.json`
- **Check**: `pnpm-lock.yaml` is up to date
- **Check**: Environment variables are properly configured
- **Run locally**: `pnpm install && pnpm build` to test

### Deployment to VPS Fails

- **Check**: VPS secrets are correctly configured in GitHub
- **Check**: SSH credentials are correct
- **Check**: VPS has sufficient disk space
- **Check**: PM2 process name matches `youraiprofitpilot`
- **Check**: `/var/www/youraiprofitpilot` directory exists and is writable

### PM2 Process Won't Restart

- **SSH to VPS**: `ssh root@82.29.190.177`
- **Check PM2 status**: `pm2 status`
- **View PM2 logs**: `pm2 logs youraiprofitpilot`
- **Manually restart**: `pm2 restart youraiprofitpilot`

## Rollback Procedure

If a deployment causes issues:

1. **SSH to VPS**: `ssh root@82.29.190.177`
2. **Check PM2 logs**: `pm2 logs youraiprofitpilot`
3. **Revert to previous version**:
   ```bash
   cd /var/www/youraiprofitpilot
   git checkout HEAD~1
   pnpm build
   pm2 restart youraiprofitpilot
   ```

## Monitoring & Logs

### GitHub Actions Logs

1. Go to your repository → **Actions** tab
2. Click on the workflow run
3. View detailed logs for each step

### VPS Application Logs

```bash
# SSH to VPS
ssh root@82.29.190.177

# View PM2 logs
pm2 logs youraiprofitpilot

# View application errors
pm2 logs youraiprofitpilot --err
```

## Best Practices

1. **Always test locally** before pushing to main:
   ```bash
   pnpm install
   pnpm build
   ```

2. **Use meaningful commit messages** for deployment tracking

3. **Monitor the Actions tab** after pushing to main

4. **Keep dependencies updated** regularly

5. **Review environment variables** before each deployment

6. **Maintain database backups** before major deployments

## Production Checklist

Before deploying to production:

- [ ] All code changes tested locally
- [ ] No console errors or warnings
- [ ] Environment variables configured correctly
- [ ] Database migrations applied (if any)
- [ ] GetResponse integration tested
- [ ] Email funnel tested end-to-end
- [ ] Dev navigation removed from pages (if applicable)
- [ ] Favicon optimized (< 100KB recommended)
- [ ] SSL certificate valid on VPS
- [ ] Backup of current production taken

## Support & Escalation

For deployment issues:

1. Check the GitHub Actions logs for error messages
2. SSH to the VPS and check PM2 logs
3. Verify all GitHub Secrets are correctly configured
4. Ensure the self-hosted runner is online and healthy

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [PM2 Documentation](https://pm2.keymetrics.io/)
- [pnpm Documentation](https://pnpm.io/)
- [Vite Build Guide](https://vitejs.dev/guide/build.html)
