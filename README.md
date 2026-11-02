# Priya G. — Data Analyst Portfolio

A responsive dark-gradient portfolio built with React, TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

## 1. Requirements
- Node.js 18+ (Node.js 20 LTS recommended)
- npm
- VS Code (recommended)

## 2. Run locally

Open this folder in VS Code, then run:

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal (usually http://localhost:5173).

## 3. Personalise before publishing

Open `src/data.ts` and update:
- `email`
- `github`
- `linkedin`
- project GitHub URLs and live demo URLs
- certificate verification links, titles and dates if needed

Add your actual resume PDF to `public/` and name it exactly:

```text
Priya-G-Resume.pdf
```

The download button points to `/Priya-G-Resume.pdf`. Do not publish until you have added the correct resume.

Check that your GPA, college name, certificate names and dates match your official records. Remove any certificate you cannot verify.

## 4. Build for production

```bash
npm run build
npm run preview
```

The production website is generated in the `dist/` folder.

## 5. Publish using GitHub Pages

### A. Create a GitHub repository
Create a **Public** repository named `priya-portfolio` (or choose your own repository name).

### B. Configure the Vite base path
If publishing at `https://USERNAME.github.io/priya-portfolio/`, edit `vite.config.ts`:

```ts
base: '/priya-portfolio/',
```

If the repository name differs, use that exact name between the slashes.

### C. Push the code

```bash
git init
git add .
git commit -m "Create data analyst portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/priya-portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

### D. Add the GitHub Pages workflow
In your repository, create `.github/workflows/deploy.yml` with the workflow below. Then commit and push it.

```yaml
name: Deploy portfolio to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

### E. Enable Pages
In GitHub:
1. Open repository → **Settings** → **Pages**.
2. Under **Build and deployment**, set Source to **GitHub Actions**.
3. Open the **Actions** tab and wait for the deployment workflow to finish.
4. Your site will be available at `https://YOUR-USERNAME.github.io/priya-portfolio/`.

## 6. Before sharing
- Test the website on mobile and desktop.
- Test the resume download.
- Test GitHub, LinkedIn, email and project links.
- Add screenshots of your real projects if you want stronger project case studies.
- Never publish private data, passwords or API keys.

## Folder structure

```text
priya-data-analyst-portfolio/
├── public/
│   └── README-ASSETS.txt
├── src/
│   ├── App.tsx
│   ├── data.ts
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```
