/** @type {import('next').NextConfig} */

// const { prefix } = require("utils/prefix");
const { prefix } = "./utils/prefix";

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: prefix,
  assetPrefix: prefix,
};

module.exports = nextConfig;
