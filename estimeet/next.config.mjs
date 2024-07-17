// next.config.js

/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? '' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    output: 'export'
};
export default nextConfig;