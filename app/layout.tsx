import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from 'next/font/google';
const inter = Outfit({ subsets: ['latin'] })
import ToggleButton from '@/components/ToggleButton';
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "LASVEC | The Future of Voting in Lagos State, Nigeria",
  description: "LASVEC is a pioneering e-voting solution designed to revolutionize the electoral process in Lagos State, Nigeria. By leveraging cutting-edge technology, LASVEC aims to increase voter participation, eliminate voting irregularities, and provide real-time results, thereby fostering a more transparent, inclusive, and democratic society- Created by Odeleye John, a visionary young software developer and programmer from Nigeria, and innovator at HubPost, LASVEC is poised to transform the future of elections in Nigeria and beyond",
  };

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="P2r_Z6CA_GDV7PMAudkhj9jsvXZfGY1Aq77CTvllPJw" />
      </head>
      <body className={inter.className} >
        {/* <ToggleButton /> */}
        <Header/>
        <Hero/>
        {children}
      </body>
    </html>
  );
}
