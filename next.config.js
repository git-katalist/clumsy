/** @type {import('next').NextConfig} */

// const { prefix } = require("utils/prefix");
const { prefix } = "./utils/prefix";

const nextConfig = {
  reactStrictMode: true,
  basePath: prefix,
  assetPrefix: prefix,
  images: {
    loader: "akamai",
    path: "/",
  },
};

module.exports = nextConfig;
