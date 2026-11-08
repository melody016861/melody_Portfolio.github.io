# Melody Hu — Bilingual Portfolio / 中英文個人履歷作品集

A responsive, bilingual personal portfolio built with React + TypeScript + Vite, ready for GitHub Pages.

## Included / 專案功能
- Chinese / English toggle (remembers preference)
- Light / dark mode
- Responsive mobile navigation
- Experience, education, skills, 6 résumé-based projects, awards, TOEIC, and contact
- Project detail dialogs
- Browser print / Save as PDF
- GitHub Actions deployment workflow
- No backend, paid service, or API key required

## 1. Install / 本機安裝

Requirements: Node.js 22.12+ (recommended) and npm, Git.

The ZIP does not include `node_modules` or `package-lock.json` because packages could not be downloaded in the preparation environment; `npm install` will generate the lock file on your computer. Commit that file afterwards for reproducible installs.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (typically `http://localhost:5173`).

To check the production build:

```bash
npm run build
npm run preview
```

## 2. Personalize before publishing / 發布前先修改

Edit `src/data.ts`. This file contains all bilingual profile data.

**Required:**
1. `profile.email` → `melody016861@gmail.com` (copied from your PDF; remove if you do not want this publicly visible).
2. `profile.github` → `https://github.com/melody016861` (identified from the hyperlinks in your PDF).
3. `profile.linkedin` → your real LinkedIn URL (or leave blank).
4. Review employer, study, research, awards, and projects for factual accuracy.
5. Add real public project URLs under each project's `repo` / `demo` fields, if available.

**Notes on source data:** This version was updated from your two-page `Resume_2.pdf`. It includes the confirmed internship and TA experience, six projects (QR, TrashNCCU, Warm Seat, Zero Leftovers, Flask CI/CD, AWS reminder), TOEIC, GPA, and award names. The separate phishing/RAG project from the previous website was removed because it does not appear in this PDF. Your PDF states an IEEE submission was under review; this is a historical claim and is not presented as an active review status. Project references were extracted from the PDF hyperlinks; check that Google Drive sharing is set appropriately before publishing. Phone number and detailed location are not included on the public site by default to limit personal exposure.

**Optional avatar:** This version intentionally shows a code-themed illustration instead of a personal photo. If you want to add an avatar, implement a photo panel and store the image in `public/`.

**Important:** Do not publish confidential employer information, internal source code, screenshots, architecture, URLs, or unpublished research assets without permission.

## 3. Create repository & push / 建立 GitHub Repository

Your existing `melody-portfolio` repository contains project materials. **Do not delete or overwrite it.** Create a separate repository named `melody016861.github.io` for this website. This is the recommended option.
For GitHub Pages using a project repository, the live URL will be:

`https://melody016861.github.io/melody-portfolio/`

With the recommended repository name **exactly** `melody016861.github.io`, the URL will be:

`https://melody016861.github.io/`

Run from this folder (replace URL with your own):

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/melody016861/melody016861.github.io.git
git push -u origin main
```

> Repository should typically be **Public** for a free GitHub Pages personal website. Never commit secrets.

## 4. Enable GitHub Pages / 開啟網站

1. Open your GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Go to **Actions** and check the `Deploy Portfolio to GitHub Pages` run.
5. Once deployment is successful, open the Pages URL shown under Settings → Pages.

`.github/workflows/deploy.yml` builds your app and publishes the `dist/` folder on pushes to `main`.

`vite.config.ts` automatically reads `GITHUB_REPOSITORY` in GitHub Actions:
- `USERNAME.github.io` → base `/`
- any other repo → base `/REPO/`

Local development uses `/`. You don't need to manually edit `base` when deploying through the included GitHub Actions workflow.

## 5. Update your portfolio / 後續更新

Modify `src/data.ts`, or adjust components/CSS, then:

```bash
git add .
git commit -m "Update portfolio"
git push
```

After the Actions deployment finishes, the **same public URL** will show the new version.

## 6. PDF resume / PDF 履歷

Click `列印 / 儲存 PDF` at the bottom of the portfolio, and choose **Save as PDF** in the browser print dialog. If you have a separately designed PDF resume, you may add it to `public/resume.pdf` and add a download link in `src/App.tsx`.

## File structure / 檔案架構

```text
melody-portfolio/
├── .github/workflows/deploy.yml  # Auto-deploy to GitHub Pages
├── public/favicon.svg
├── src/
│   ├── App.tsx                   # All UI sections & interactions
│   ├── data.ts                   # EDIT: bilingual profile content
│   ├── main.tsx                  # React entry
│   └── styles.css                # Blue/white responsive design
├── index.html
├── package.json
├── package-lock.json            # Generated when you run npm install
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Official deployment documentation

https://vite.dev/guide/static-deploy#github-pages

---

Public portfolio content is a starting draft. Please verify names, chronology, award titles and job descriptions before publishing it as a professional resume.

## Existing project repository / 舊有專案倉庫

- Keep `melody-portfolio` and its project files intact. Do not push this ZIP into it.
- Create a new **public** repo named `melody016861.github.io`.
- Upload the contents of this project's folder into the new repo (not the outer ZIP).
- Link publicly shareable projects back to their correct repository paths by editing `projects[].repo` in `src/data.ts`; do not invent links.
- Only the TrashNCCU/AIDcard GitHub repo and PDF-embedded Drive URLs have been populated as verified source links. Check the contents and sharing permissions before publishing.
- If `melody016861.github.io` is already taken by another repository in your GitHub account, choose another name such as `melody-resume-site`; the included Vite configuration automatically handles `/<repository>/` when deployed through GitHub Actions.

### GitHub Pages source

Settings → Pages → Build and deployment → **GitHub Actions**. Push to `main` and inspect the Actions run.
Official documentation: https://vite.dev/guide/static-deploy#github-pages
