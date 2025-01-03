import type { Metadata } from "next";
import Providers from "./providers";
import "./globals.css";
import {DM_Sans} from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';

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
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${dmSans.className} `}
        >
        <Providers>
          <div className="root-layout">{children}</div>
        </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
