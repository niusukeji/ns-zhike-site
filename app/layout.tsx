// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "NS智科 · 智慧监测与工业智能运维",
  description:
    "动设备智慧监测、配电房用电安全、消防设施智慧监测的一体化AIoT平台。预测性维护、能效与碳排分析、私有化部署。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

