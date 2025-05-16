/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'export',
  //loader: 'custom',
  //loaderFile: './loader.js',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;