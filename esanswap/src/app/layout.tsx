import type { Metadata } from "next";
import { encodeSansExpanded } from "@/fonts/font";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { ThemeProvider } from "@/context/theme-provider";
import { NextUIProvider } from "@nextui-org/react";
import { ModeToggle } from "@/components/ModeToggle";

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
      <body className={encodeSansExpanded.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextUIProvider>
            <Navbar />
            {children}
            <ModeToggle />
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
