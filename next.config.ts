import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // статический экспорт (Next 15 без next export)
  images: { unoptimized: true }, // чтобы не упасть на next/image при экспорте
  trailingSlash: true, // удобно для статики/хостинга на CDN
};

export default nextConfig;
