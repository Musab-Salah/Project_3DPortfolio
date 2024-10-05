import type { Metadata } from "next";
import { Cairo as FontSans } from "next/font/google";
import "@/app/styles/globals.css";

const fontSans = FontSans({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Big Bang",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className={fontSans.variable}>{children}</body>
    </html>
  );
}
