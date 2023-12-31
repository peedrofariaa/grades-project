import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

export const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Grades app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
