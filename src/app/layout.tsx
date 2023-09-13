import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextUiProvider } from "@/components/NextUiProvider";
import NavbarComponent from "@/components/Navbar";
// "Source Sans Pro", sans-serif

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarComponent />
        <NextUiProvider>{children}</NextUiProvider>
      </body>
    </html>
  );
}
