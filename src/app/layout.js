import { Major_Mono_Display, Anton } from "next/font/google";
import "./globals.css";
import Preloader from "./components/Preloader";

const majorMono = Major_Mono_Display({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Black cat",
  description: "annan ka portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

        <body className={`${majorMono.className}`}>{children}</body>
   
    </html>
  );
}
