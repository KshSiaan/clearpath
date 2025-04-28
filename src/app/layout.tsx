import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "ClearPath",
  description: "Pet disposal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased font-mont`}>
        <Suspense fallback={<>Just a second..</>}>{children}</Suspense>
        <Toaster />
      </body>
    </html>
  );
}
