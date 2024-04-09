"use client";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import ".././globals.css";
import { cn } from "../../lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Provider, } from "react-redux";
import { store } from "../../store/store";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <head>
          
        </head>
        <body
          className={cn("min-h-screen bg-background font-sans antialiased")}
        >
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
    </Provider>
  );
}
