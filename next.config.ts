// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 告诉 Next 进行静态导出（生成 /out）

  // 若页面里使用了 <Image>，静态导出必须关闭优化
  images: { unoptimized: true },

  // 可选：保持原有路径风格
  trailingSlash: false,
};

export default nextConfig;
