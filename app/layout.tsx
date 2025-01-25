import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    template: "%s | シンプルなコーポレートサイト",
    default: "シンプルなコーポレートサイト",
  },
  description:
    "「Next.js＋ヘッドレスCMSで始める！かんたん・モダンWebサイト制作入門」で作成されるサイトです。",
  openGraph: {
    title: "シンプルなｋーぽレートサイト",
    description:
      "「Next.js＋ヘッドレスCMSで始める！かんたん・モダンWebサイト制作入門」で作成されるサイトです。",
      images: ["/ogp.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleTagManager gtmId="GTM-XXX" />
    </html>
  );
}
