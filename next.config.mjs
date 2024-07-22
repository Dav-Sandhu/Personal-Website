/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/Personal-Website",
    assetPrefix: "/Personal-Website",
    output: "export", 
    distDir: 'dist',
    images: {
        unoptimized: true
    }
 };

export default nextConfig;
