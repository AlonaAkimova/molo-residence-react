import React, { ReactNode } from "react";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { BreakfastOrderProvider } from "@/store/BreakfastOrderProvider";
import Header from "@/components/Header";
import { Rubik } from "@next/font/google";
import { ThemeProvider } from "@mui/material/styles";
interface RootLayoutProps {
  children: ReactNode;
}

interface Metadata {
  title: string;
  description: string;
}

const rubik = Rubik({
  subsets: ["latin"],
  weight: "400",
});
export const metadata: Metadata = {
  title: "MoloResidence",
  description: "MoloResidence breakfast",
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
