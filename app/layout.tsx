import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {DM_Sans} from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "The complete Application",
  description: "The complete application to learn everything",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={''}
      >
        {children}
      </body>
    </html>
  );
}
