// next.config.js

/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? process.env.DEPLOYED_GITHUB_PATH : '/Estimeet',
    assetPrefix: process.env.NODE_ENV === 'production' ? process.env.DEPLOYED_GITHUB_PATH : '/Estimeet',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    output: 'export',
};
export default nextConfig;