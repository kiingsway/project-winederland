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
      source: "/instagram_page",
      destination: "https://www.instagram.com/winederland__/",
    },
    {
      source: "/tiktok_page",
      destination: "https://www.tiktok.com/@winederland_ilac/",
    },
  ],
};

export default nextConfig;
