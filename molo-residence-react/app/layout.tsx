import React, { ReactNode } from "react";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { BreakfastOrderProvider } from "@/store/BreakfastOrderProvider";

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

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <BreakfastOrderProvider>{children}</BreakfastOrderProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
