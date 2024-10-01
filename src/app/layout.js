import { Major_Mono_Display, Poppins } from "next/font/google";
import "./globals.css";
import ScrollProvider from "./components/Scrollprovider";
import Menu from "./components/Menu/Menu";

const majorMono = Major_Mono_Display({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "JISHNU",
  description: "portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${majorMono.className} ${poppins.className}`}>
        <ScrollProvider>
          <Menu />
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
