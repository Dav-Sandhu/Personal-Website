/** @type {import('next').NextConfig} */

const path = process.env.NODE_ENV === "production" ? '/personal-website' : ''

const nextConfig = {
    basePath: path,
    assetPrefix: path,
    output: "export", 
    distDir: 'dist',
    images: {
        unoptimized: true
    }
 };

export default nextConfig;
