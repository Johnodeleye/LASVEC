'use client';
import { SquareX } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image"
import { useState } from "react"

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    return (
<header className="bg-white/40 shadow ">
<motion.div 
    initial={{ opacity: 0, x:-200 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }} 
    whileInView={{ opacity: 1, x:0 }}
    viewport={{once: true}}
    className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <motion.div 
    initial={{ opacity: 0, x:-200 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }} 
    whileInView={{ opacity: 1, x:0 }}
    viewport={{once: true}} 
    className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          <div className="flex flex-row gap-2">
          <Image src={'/lagos.png'} alt="Lasvec logo" width={32} height={40}/>
          <Image src={'/logo.png'} alt="Lasvec logo" width={100} height={80}/>
          </div>
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
          <li>
              <a className="text-gray-500 transition hover:text-blue-500/75" href="#"> Home </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-blue-500/75" href="#"> About </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-blue-500/75" href="#"> FAQ </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-blue-500/75" href="#"> Contact </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-blue-500/75" href="#"> Upcoming Events </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-blue-500/75" href="#"> Blog </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow"
            href="#"
          >
            Login
          </a>

          <div className="hidden sm:flex">
            <a
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600"
              href="#"
            >
              Register
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75" onClick={() => setMobileMenu(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
             {/* ------------Mobile Menu----------------- */}
             {mobileMenu && (
      <motion.div 
      initial={{ opacity: 0, x:-200 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }} 
      whileInView={{ opacity: 1, x:0 }}
      viewport={{once: true}}
      className="z-50 fixed top-0 bottom-0 right-0 w-full overflow-hidden transition-transform ease-in-out bg-blue-950 duration-5000s md:hidden text-white">
        <div className='flex justify-end p-6 cursor-pointer ' onClick={() => setMobileMenu(false)}>
        <SquareX color="red" />
        </div>
        <div className="flex justify-center gap-1">
            <Image src={'/lagos.png'} alt="logo" width={32} height={40}/>
            <Image src={'/logo.png'} alt="logo" width={100} height={100}/>
        </div>
        <ul className='flex flex-col items-center gap-2 px-5 mt-5 text-lg font-medium'>
        <a onClick={() => setMobileMenu(false)} href="/" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-red-500'>Home</a>
        <a onClick={() => setMobileMenu(false)} href="#About" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-red-500'>About Us</a>
        <a onClick={() => setMobileMenu(false)} href="#Project" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-red-500'>FAQ</a>
        <a onClick={() => setMobileMenu(false)} href="#Testimonials" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-red-500'>Contact Us</a>
        <a onClick={() => setMobileMenu(false)} href="#Testimonials" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-red-500'>Upcoming Events</a>
        <a onClick={() => setMobileMenu(false)} href="#Testimonials" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-red-500'>Blog</a>
        <a onClick={() => setMobileMenu(false)} href="https://hubpost-app.vercel.app/authors/testmail@gmail.com" className='inline-block px-4 py-1 rounded cursor-pointer hover:text-red-500 bg-red-500 hover:bg-transparent hover:border border-white'>REGISTER</a>
        </ul>
        <div className="px-10 flex justify-center text-center mt-44 font-bold">
        <p className="text-sm text-gray-400">~ODELEYE JOHN | Software Developer | Founder, HubPost</p>
        </div>
      </motion.div>
      )}
  </motion.div>
</header>
    )
}

export default Header