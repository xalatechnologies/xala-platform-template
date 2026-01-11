# Repository Template Setup Instructions

This document explains how to set up this template as a GitHub repository template.

## Steps to Create Template Repository

### 1. Create GitHub Repository

1. Go to https://github.com/xalatechnologies
2. Click "New repository"
3. Name it: `xala-platform-template`
4. Description: "Complete starter template for building SaaS applications with Xala Platform SDK"
5. Select "Template repository" checkbox
6. Add topics: `xala-platform`, `nextjs`, `saas`, `template`, `typescript`
7. Click "Create repository"

### 2. Push Template Files

```bash
# Clone the empty repository
git clone https://github.com/xalatechnologies/xala-platform-template.git
cd xala-platform-template

# Copy all template files from the SDK
cp -r /path/to/xala-sdk/modules/xala-sdk/template/* .

# Add and commit files
git add .
git commit -m "Initial template commit with Xala Platform SDK v2.0.0"

# Push to GitHub
git push origin main
```

### 3. Configure Repository Settings

1. Go to repository Settings
2. Under "General", ensure "Template repository" is checked
3. Set default branch to `main`
4. Add branch protection rules for main branch:
   - Require pull request reviews
   - Require status checks to pass
   - Require branches to be up to date

### 4. Add Repository Secrets

In Settings > Secrets and variables > Actions, add:

- `NEXTAUTH_SECRET` (for template users to override)
- `VERCEL_TOKEN` (for deployment workflow)
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

### 5. Create Documentation

Add a comprehensive README.md that explains:

- How to use the template
- Prerequisites
- Quick start guide
- Features included
- Next steps

### 6. Test the Template

1. Click "Use this template" to create a test repository
2. Follow the setup instructions
3. Verify everything works:
   - `pnpm install`
   - `pnpm dev`
   - `pnpm build`
   - `pnpm test`

### 7. Publish and Promote

1. Create a release on GitHub
2. Update documentation in the main SDK
3. Announce to the team
4. Add to getting started guides

## Template Features Checklist

- ✅ Next.js 14 with App Router
- ✅ TypeScript configuration
- ✅ Tailwind CSS with Xala design tokens
- ✅ Xala Platform SDK v2.0.0
- ✅ Prisma database setup
- ✅ Authentication configuration
- ✅ Example pages and components
- ✅ Testing setup with Vitest
- ✅ ESLint and Prettier
- ✅ GitHub Actions CI/CD
- ✅ Environment configuration
- ✅ Norwegian localization ready

## Maintenance

- Update Xala Platform SDK version when new releases are available
- Keep dependencies up to date
- Test with new Next.js versions
- Update documentation as needed
- Monitor for user feedback and issues
