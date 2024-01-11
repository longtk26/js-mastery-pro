import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Js mastery",
  description: "Clone js master resources",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}
