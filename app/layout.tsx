import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ace's Portfolio",
  description: "A website portfolio that will ace your expectations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/AC.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/ace logo white.svg"
          type="image/png"
          media="(prefers-color-scheme: light)"
        />
        <link rel="apple-touch-icon" href="/AC.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
