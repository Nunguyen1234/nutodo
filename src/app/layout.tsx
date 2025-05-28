  import type { Metadata } from "next";
  // import { Geist, Geist_Mono } from "next/font/google";
  import {Poppins} from "next/font/google"; 
  import "./globals.css";
import ResponsiveNav from "../../components/Home/Navbar/ResponsiveNav";
import Footer from "../../components/Home/Footer/Footer";
import ScrollToTop from "../../components/Helper/ScrollToTop";
import Image from "next/image";
  const font = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-poppins",
  })
  // const geistSans = Geist({
  //   variable: "--font-geist-sans",
  //   subsets: ["latin"],
  // });

  // const geistMono = Geist_Mono({
  //   variable: "--font-geist-mono",
  //   subsets: ["latin"],
  // });

  export const metadata: Metadata = {
    title: "Nutodo",
    description: "A simple todo app",
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className= {`${font.className} antialiased`}>  
          <ResponsiveNav />   
         {children}
         <Footer />
         <ScrollToTop />
         <div
          style={{
            position: "fixed",
            bottom: 80,
            right: 20,
            zIndex: 9999,
            // background: "white",
            padding: 10,
            borderRadius: 12,
            // boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          <Image
            src="/images/QRNSVFamer.png"
            width={100}
            height={80}
            alt="QR code"
            style={{ display: "block" }}
          />
          
        </div>
        </body>
      </html>
    );
  }
