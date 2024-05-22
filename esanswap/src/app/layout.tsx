import type { Metadata } from "next";
import { inter } from "@/fonts/font";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { ThemeProvider } from "@/context/theme-provider";

export const metadata: Metadata = {
  title: "EsanSwap",
  description:
    "Trade, earn, and own your crypto on the all-in-one multichain DEX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
