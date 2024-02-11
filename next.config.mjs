/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
      },
    ],
  },
  compiler: {
    removeConsole: false,
    styledComponents: true,
  },
};
export default nextConfig;
