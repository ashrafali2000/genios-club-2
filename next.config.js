/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        // destination: "http://localhost:8000/:path*",
        destination: "https://geniosclubeventbot.ue.r.appspot.com/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
