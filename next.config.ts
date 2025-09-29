import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // включаем статический экспорт
  images: { unoptimized: true }, // чтобы next/image не ломал export
  trailingSlash: true, // (опционально) удобно для статики на CDN
};

export default nextConfig;
