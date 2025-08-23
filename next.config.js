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
        // The `unoptimized: true` option is not supported in your Next.js version.
        // For `next export` to work with `next/image`, you must use a loader other than the default.
        loader: 'akamai',
        path: '',
    },
};

module.exports = nextConfig;