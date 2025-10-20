import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

// Allow optional REPO_NAME env var so builds for GitHub Pages project sites
// can set a basePath and assetPrefix automatically. If REPO_NAME is empty
// the site will build as a root site (e.g. user.github.io).
const repoName = process.env.REPO_NAME || '';
const basePath = repoName ? `/${repoName}` : '';
const assetPrefix = basePath || '';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Export static HTML files suitable for static hosts like GitHub Pages
  output: 'export',
  // When deploying to a project site (https://<user>.github.io/<repo>),
  // set REPO_NAME to the repository name so assets and routes are prefixed.
  basePath,
  assetPrefix,
  // Use trailingSlash so `next export` emits directories (helps with gh-pages)
  trailingSlash: true,
};

export default withMDX(config);
