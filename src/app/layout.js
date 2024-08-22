import { Inter } from "next/font/google";
import "./globals.css";
import ScrollProvider from "./components/Scrollprovider";
import { Major_Mono_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const majorMono = Major_Mono_Display({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={majorMono.className}>{children}</body>
    </html>
  );
}