import localFont from 'next/font/local'
import "./globals.css";
import Navbar from "@/components/Navbar.jsx"
import Footer from "@/components/Footer.jsx"



export const metadata = {
  title: "Montgomery Mcdonald's Portfolio",
  description: "Portfolio for Montgomery Mcdonald",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={'max-h-fit antialiased '}
    >
      <body className="max-h-fit  flex flex-col lg:flex-row items-center  ">
        <Navbar />
        <div className="flex flex-col justify-between items-center w-full">
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  );
}
