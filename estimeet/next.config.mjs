// next.config.js

/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath:  process.env.DEPLOYED_GITHUB_PATH || '/Estimeet',
    assetPrefix:  process.env.DEPLOYED_GITHUB_PATH || '/Estimeet/',
    trailingSlash: true,
    output: 'export'
};
export default nextConfig;