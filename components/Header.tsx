'use client';
import { SquareX } from "lucide-react";
import { motion } from "motion/react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Mobile from "./Mobile";

const Header = () => {
  const { data: session } = useSession();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  // this session email is very important to track someone's email
  const sessionEmail = session?.user?.email;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsPopupVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    if (!isPopupVisible) {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isPopupVisible]);

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-gray-100 shadow">
      <motion.div 
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }} 
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <div className="flex flex-row gap-2">
                <Image src={'/lagos.png'} alt="Lasvec logo" width={32} height={40} />
                <Image src={'/logo.png'} alt="Lasvec logo" width={100} height={80} />
              </div>
            </a>
          </div>

          {/* Desktop Navigation (Always visible) */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li><a className="text-gray-500 transition hover:text-blue-500/75" href="/">Home</a></li>
                <li><a className="text-gray-500 transition hover:text-blue-500/75" href="/#About">About</a></li>
                <li><a className="text-gray-500 transition hover:text-blue-500/75" href="/#Faq">FAQ</a></li>
                <li><a className="text-gray-500 transition hover:text-blue-500/75" href="/#Contact">Contact</a></li>
                <li><a className="text-gray-500 transition hover:text-blue-500/75" href="/Events">Upcoming Events</a></li>
                <li><a className="text-gray-500 transition hover:text-blue-500/75" href="/">Blog</a></li>
              </ul>
            </nav>
          </div>

          {/* User Authentication Logic */}
          {session?.user ? (
            <>
              <div 
                ref={popupRef}
                className={`absolute z-30 right-0 mr-10 top-20 p-6 shadow-lg shadow-blue-600 border border-blue-500 rounded-md flex-col gap-2 text-right min-w-[160px] bg-black ${isPopupVisible ? 'flex' : 'hidden'}`}>
                <div className="font-semibold text-left text-green-500">Welcome, {session?.user?.name}</div>
                <div className="text-justify text-white">{session?.user?.email}</div>
                <Link onClick={() => setIsPopupVisible(false)} className="text-justify hover:bg-blue-500 text-white rounded-xl" href={`/authors/${sessionEmail}`}>🟢Go to Profile</Link>
                <Link onClick={() => setIsPopupVisible(false)} className="text-justify hover:bg-blue-500 rounded-xl text-white" href={'/create-post'}>🟢Create Post</Link>
                <Link onClick={() => setIsPopupVisible(false)} className="text-justify hover:bg-blue-500 rounded-xl text-white" href={'https://whatsapp.com/channel/0029Vajn8TuFcovziHg7rM2B'}>🟢Join Community</Link>
                <button onClick={() => signOut()} className="px-2 py-2 bg-blue-500 rounded">
                  Sign Out
                </button>
              </div>
              <div className="flex items-center gap-2">
                {/* <Link className="items-center hidden gap-2 mr-6 md:flex btn" href={'/create-post'}>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="text-white">Create new</span>
                </Link> */}
                <div className="relative cursor-pointer ml-[120px] md:ml-0" onClick={() => setIsPopupVisible((prev) => !prev)}>
                  <Image
                    src={session?.user?.image || '/lagos.png'}
                    width={36}
                    height={36}
                    alt="profile image"
                    className="transition rounded-full shadow md:mr-9 hover:scale-105"
                  />
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5} stroke="blue" className="absolute bottom-0 w-4 h-4 -translate-x-1/2 left-1/2 xs:block" style={{ zIndex: 1 }} />
                  </span>
                </div>
              </div>
              <Mobile/>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow" href="/login">
                  Login
                </a>
                <div className="hidden sm:flex">
                  <a className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600" href="/register">
                    Register
                  </a>
                </div>
              </div>
              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75" onClick={() => setMobileMenu(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
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
            <ul className='flex flex-col items-center gap-2 px-5 mt-5 text-lg font-medium'>
              <a onClick={() => setMobileMenu(false)} href="/" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-red-500'>Home</a>
              <a onClick={() => setMobileMenu(false)} href="/#About" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-red-500'>About Us</a>
              <a onClick={() => setMobileMenu(false)} href="/#Faq" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-red-500'>FAQ</a>
              <a onClick={() => setMobileMenu(false)} href="/#Contact" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-red-500'>Contact Us</a>
              <a onClick={() => setMobileMenu(false)} href="/" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-red-500'>Upcoming Events</a>
              <a onClick={() => setMobileMenu(false)} href="/" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-red-500'>Blog</a>
              <a onClick={() => setMobileMenu(false)} href="/register" className='inline-block px-4 py-1 rounded cursor-pointer hover:text-red-500 bg-red-500 hover:bg-transparent hover:border border-white'>REGISTER</a>
            </ul>
            <div className="px-10 flex justify-center text-center mt-44 font-bold">
              <a href='https://perspicaciousdev.vercel.app' className="text-sm text-gray-400">~ODELEYE JOHN | Software Developer | Founder, HubPost</a>
            </div>
          </motion.div>
        )}
      </motion.div>

    
    </header>
  );
};

export default Header;
