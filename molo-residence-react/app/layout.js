import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { BreakfastOrderProvider } from "@/store/BreakfastOrderProvider";
export const metadata = {
  title: "MoloResidence",
  description: "MoloResidence breakfast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <BreakfastOrderProvider>
          <body> {children}</body>
        </BreakfastOrderProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
