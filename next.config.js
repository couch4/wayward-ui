/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["azurewebsites.net", "*.azurewebsites.net"],
    },
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  env: {
    RUNTIME: "storybook",
    IMAGE_PROCESSOR_URL:
      process.env.IMAGE_PROCESSOR_URL ||
      "https://cdn-zhweb-qa-media.azureedge.net/api/v1/",
  },
  images: {
    deviceSizes: [384, 450, 640, 750, 828, 1080, 1200, 1400, 1600, 1920, 2048],
  },
};

module.exports = nextConfig;
