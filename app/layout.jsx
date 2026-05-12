import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar.jsx"
import Footer from "@/components/Footer.jsx"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Montgomery Mcdonald's Portfolio",
  description: "Portfolio for Montgomery Mcdonald",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`min-h-screen max-h-fit antialiased`}
    >
      <body className="min-h-screen max-h-fit  flex flex-col lg:flex-row items-center ">
        <Navbar />
        <div className="min-h-screen lg:min-h-screen flex flex-col justify-between items-center w-full">
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  );
}
