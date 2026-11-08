
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Actions provides:
// GITHUB_REPOSITORY = "username/repository"

const [owner, repository] =
  (process.env.GITHUB_REPOSITORY ?? '').split('/');

// Only the exact username.github.io repository
// is a GitHub Pages user site.
const isUserSite =
  repository?.toLowerCase() ===
  `${owner?.toLowerCase()}.github.io`;

const base = repository
  ? isUserSite
    ? '/'
    : `/${repository}/`
  : '/';

export default defineConfig({
  plugins: [react()],
  base,
});
