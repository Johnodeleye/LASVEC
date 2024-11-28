'use client';
import { SquareX } from "lucide-react";
import { motion } from "motion/react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Mobile = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const { data: session } = useSession();
    return (
        <div className="">
             <div className="block md:hidden">
                <button className="rounded cursor-pointer z-50 bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75" onClick={() => setMobileMenu(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="z-50 fixed top-0 bottom-0 right-0 w-full overflow-hidden transition-transform ease-in-out bg-blue-950 duration-5000s md:hidden text-white">
            <div className='flex justify-end p-6 cursor-pointer ' onClick={() => setMobileMenu(false)}>
              <SquareX color="red" />
            </div>
            <div className="flex justify-center gap-1">
              <Image src={'/lagos.png'} alt="logo" width={32} height={40} />
              <Image src={'/logo.png'} alt="logo" width={100} height={100} />
            </div>
            <ul className='flex flex-col items-center gap-1 px-5 mt-4 text-lg font-medium'>
              <a onClick={() => setMobileMenu(false)} href="/" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-red-500'>Home</a>
              <a onClick={() => setMobileMenu(false)} href="/#About" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-red-500'>About Us</a>
              <a onClick={() => setMobileMenu(false)} href="/#Faq" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-red-500'>FAQ</a>
              <a onClick={() => setMobileMenu(false)} href="/#Contact" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-red-500'>Contact Us</a>
              <a onClick={() => setMobileMenu(false)} href="/" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-red-500'>Blog</a>
              <a onClick={() => setMobileMenu(false)} href="/" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-red-500'>Upcoming Events</a> 
              <a onClick={() => setMobileMenu(false)} href="/register" className='inline-block px-4 py-1 rounded cursor-pointer hover:text-red-500 bg-red-500 hover:bg-transparent hover:border border-white'>Dashboard</a>
            </ul>

            <div className="px-10 flex justify-center text-center mt-36 font-bold">
              <a href='/dashboard' className="text-sm text-gray-400">~You are currently signed in as {session?.user?.name}</a>
            </div>
            <div className="px-10 flex justify-center text-center mt-40 font-bold">
              <a href='https://perspicaciousdev.vercel.app' className="text-sm text-gray-400">~ODELEYE JOHN | Software Developer | Founder, HubPost</a>
            </div>
          </motion.div>
        )}
        </div>
    )
}

export default Mobile