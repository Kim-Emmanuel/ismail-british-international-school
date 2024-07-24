import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@components/Footer";


const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Ismael British International School",
  description: "A dynamic and forward-thinking educational institution, Ismael British International School provides a nurturing environment for students to thrive academically and personally. Our commitment to excellence, innovative teaching methods, and global perspective empower students to become lifelong learners and responsible global citizens. Welcome to a world of knowledge and growth at Ismael British International School.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
