/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: [
    "@ant-design",
    "@ant-design/pro-editor",
    "antd",
    "rc-pagination",
    "rc-picker",
    "rc-table",
    "rc-tree",
    "rc-util"
  ],
  rewrites: async () => [
    {
      source: "/usdbrl",
      destination: "https://www.google.com/search?q=usd+to+brl",
    },
    {
      source: "/usdcad",
      destination: "https://www.google.com/search?q=usd+to+cad",
    },
    {
      source: "/usdeur",
      destination: "https://www.google.com/search?q=usd+to+eur",
    },
    {
      source: '/',
      destination: '/Home',
    },
  ],
};

export default nextConfig;
