// module.exports = {
//   i18n: {
//     locales: ["en"],
//     defaultLocale: "en",
//   },
//   target: "serverless",
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback.fs = false;
//     }
//     return config;
//   },
// };

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: isProd ? '/nextly/' : '',
    basePath: isProd ? '/nextly' : '',
    images: {
        unoptimized: true,
    },
    output: 'export',
};

module.exports = nextConfig;