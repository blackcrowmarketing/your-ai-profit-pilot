# GitHub Secrets Configuration Guide

## Overview

This guide walks you through setting up the required GitHub Secrets for the automated deployment workflow to function properly.

## Required Secrets

The following secrets must be configured in your GitHub repository for the deployment workflow to work:

| Secret Name | Value | Example | Description |
|-------------|-------|---------|-------------|
| `VPS_HOST` | IP address of your VPS | `82.29.190.177` | The public IP address of your production VPS |
| `VPS_USER` | SSH username | `root` | The username used to SSH into the VPS |
| `VPS_PASSWORD` | SSH password | `your-secure-password` | The password for SSH authentication |
| `VPS_DEPLOY_DIR` | Deployment directory path | `/var/www/youraiprofitpilot` | The directory where the application is deployed |

## Step-by-Step Setup

### 1. Navigate to Repository Settings

1. Go to your GitHub repository: `https://github.com/youraiprofitpilot/youraiprofitpilot`
2. Click on the **Settings** tab
3. In the left sidebar, click **Secrets and variables** → **Actions**

### 2. Create VPS_HOST Secret

1. Click **New repository secret**
2. **Name**: `VPS_HOST`
3. **Secret**: `82.29.190.177`
4. Click **Add secret**

### 3. Create VPS_USER Secret

1. Click **New repository secret**
2. **Name**: `VPS_USER`
3. **Secret**: `root`
4. Click **Add secret**

### 4. Create VPS_PASSWORD Secret

1. Click **New repository secret**
2. **Name**: `VPS_PASSWORD`
3. **Secret**: (Your VPS SSH password)
4. Click **Add secret**

### 5. Create VPS_DEPLOY_DIR Secret

1. Click **New repository secret**
2. **Name**: `VPS_DEPLOY_DIR`
3. **Secret**: `/var/www/youraiprofitpilot`
4. Click **Add secret**

## Verification

After adding all secrets:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. You should see all four secrets listed:
   - ✅ `VPS_HOST`
   - ✅ `VPS_USER`
   - ✅ `VPS_PASSWORD`
   - ✅ `VPS_DEPLOY_DIR`

## Security Best Practices

1. **Never commit secrets** to the repository
2. **Use strong passwords** for VPS_PASSWORD
3. **Rotate credentials** periodically
4. **Limit secret access** to necessary workflows only
5. **Monitor secret usage** in GitHub Actions logs
6. **Use SSH keys** instead of passwords when possible (future enhancement)

## Updating Secrets

To update a secret:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click the secret you want to update
3. Click **Update secret**
4. Enter the new value
5. Click **Update secret**

## Troubleshooting

### Workflow Still Fails After Adding Secrets

1. **Verify secret names** match exactly (case-sensitive):
   - `VPS_HOST` (not `vps_host`)
   - `VPS_USER` (not `vps_user`)
   - `VPS_PASSWORD` (not `vps_password`)
   - `VPS_DEPLOY_DIR` (not `vps_deploy_dir`)

2. **Check workflow file** references the correct secret names:
   ```yaml
   env:
     VPS_HOST: ${{ secrets.VPS_HOST }}
     VPS_USER: ${{ secrets.VPS_USER }}
     VPS_PASSWORD: ${{ secrets.VPS_PASSWORD }}
     VPS_DEPLOY_DIR: ${{ secrets.VPS_DEPLOY_DIR }}
   ```

3. **Verify VPS credentials** are correct by testing SSH manually:
   ```bash
   ssh -u root@82.29.190.177
   # Enter password when prompted
   ```

### SSH Connection Timeout

- **Check**: VPS is online and accessible
- **Check**: Firewall allows SSH (port 22)
- **Check**: IP address in VPS_HOST is correct

### Permission Denied

- **Check**: SSH user has correct permissions
- **Check**: Deploy directory exists and is writable
- **Check**: SSH password is correct

## Next Steps

1. ✅ Add all four secrets to GitHub
2. ✅ Verify secrets are listed in Settings
3. ✅ Push code to `main` branch to trigger workflow
4. ✅ Monitor the workflow in the Actions tab
5. ✅ Verify deployment on VPS

## Additional Resources

- [GitHub Secrets Documentation](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [GitHub Actions Security](https://docs.github.com/en/actions/security-guides)
