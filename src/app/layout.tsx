import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from 'next/font/google';
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({subsets : ['vietnamese']})


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
            <Header/>
            {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
