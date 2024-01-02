import { Inter } from "next/font/google";
import "./globals.css";
import Home from "./Home";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout() {
  return (
    <div>
      <Home />
    </div>
  );
}
