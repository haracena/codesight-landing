import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Codesight",
  description: "Consultora tecnológica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
