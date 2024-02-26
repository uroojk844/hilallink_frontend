/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: ""
      },
    ],
  },
  compiler: {
    removeConsole: false,
    styledComponents: true,
  },
};
export default nextConfig;
