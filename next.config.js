/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["@burnt-labs/abstraxion"], // Correctly transpile the package
    reactStrictMode: true,
};

module.exports = nextConfig;
