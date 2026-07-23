/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/book-a-call",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/assessment",
        destination: "/business-intelligence-audit",
        permanent: true,
      },
      {
        source: "/why-flux",
        destination: "/philosophy",
        permanent: true,
      },
      {
        source: "/methodology",
        destination: "/process",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
