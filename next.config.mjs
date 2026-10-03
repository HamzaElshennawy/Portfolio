/** @type {import('next').NextConfig} */
const nextConfig = {
    // Static HTML export for GitHub Pages
    output: "export",
    // Set by the deploy workflow when the site is served from a sub-path (e.g. /Portfolio)
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;
