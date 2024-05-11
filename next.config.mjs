/** @type {import('next').NextConfig} */
const nextConfig = {
    // enable topLevelAwait
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ['mongoose']
    },
    images: {
        domains: ['lh3.googleusercontent.com']
    },
    webpack(config) {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true
        }
        return config
    }
};

export default nextConfig;
