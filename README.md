# Xala Platform Template

A complete, production-ready starter template for building SaaS applications with Xala Platform SDK.

## 🚀 Quick Start

Click the "Use this template" button above to create a new repository with all the configurations and best practices already set up.

## ✨ What's Included

- ⚡ **Next.js 14** with App Router and TypeScript
- 🎨 **Xala Platform SDK v2.0.0** with 95+ components
- 🎯 **Tailwind CSS** with design tokens
- 🔐 **Authentication** (BankID, ID-porten, Vipps ready)
- 🏢 **Multi-tenancy** support
- 🔒 **RBAC** permissions system
- 🌍 **i18n** (Norwegian/English)
- 📊 **Database** with Prisma
- 🧪 **Testing** with Vitest
- 🚀 **CI/CD** with GitHub Actions
- 📦 **Deployment** ready (Vercel/Docker)

## 📋 Prerequisites

- Node.js 20+
- pnpm 8+
- GitHub account

## 🛠️ Setup

```bash
# Clone your new repository
git clone https://github.com/your-username/your-app.git
cd your-app

# Install dependencies
pnpm install

# Configure environment
cp .env.example .env.local

# Start development
pnpm dev
```

## 📁 Project Structure

```
your-app/
├── .github/workflows/     # CI/CD pipelines
├── app/                   # Next.js app directory
├── components/            # Reusable components
├── lib/                   # Utilities and config
├── prisma/               # Database schema
├── public/               # Static assets
└── tests/                # Test files
```

## 📚 Documentation

- [Junior Developer Guide](./docs/junior-developer-guide.md)
- [API Reference](./docs/api-reference.md)
- [Deployment Guide](./docs/deployment.md)

## 🆘 Getting Help

- 📖 [Xala Platform Docs](https://docs.xala.no)
- 💬 [Discord Community](https://discord.gg/xala)
- 🐛 [Report Issues](https://github.com/xalatechnologies/platform/issues)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
