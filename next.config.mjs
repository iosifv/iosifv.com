import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
  async redirects() {
    return [
      {
        // I need this because iosifv.eth points to this page and actually updating a .eth website costs money :)
        source: "/cv",
        destination: "https://cv.iosifv.com",
        permanent: true,
      },
    ];
  },
};

export default withContentlayer(nextConfig);
