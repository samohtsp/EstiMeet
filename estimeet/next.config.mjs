// next.config.js

/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? '/Estimeet' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Estimeet' : '',
    trailingSlash: true,
    output: 'export'
};
export default nextConfig;