// next.config.js

/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? process.env.DEPLOYED_GITHUB_PATH : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? process.env.DEPLOYED_GITHUB_PATH : '',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    output: 'standalone',
};
export default nextConfig;