import React, { ReactNode } from "react";
import "./globals.css";
import type { Viewport } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { BreakfastOrderProvider } from "@/store/BreakfastOrderProvider";
import Header from "@/components/Header";

interface RootLayoutProps {
  children: ReactNode;
}

interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: "MoloResidence",
  description: "MoloResidence breakfast",
};
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "cyan" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <BreakfastOrderProvider>
            <Header />
            {children}
          </BreakfastOrderProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
