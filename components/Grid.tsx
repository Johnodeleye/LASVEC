'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Grid = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 lg:py-32 py-16 container mx-auto px-6 lg:px-px"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-blue-600 rounded-lg p-8 text-white cursor-pointer animate-bounce [animation-duration:1s] hover:animate-none hover:shadow-lg hover:shadow-slate-700"
      >
        <h3 className="text-lg font-bold mb-2">Step 1: Register to Vote</h3>
        <p className="text-sm">Create an account and verify your identity to ensure secure and legitimate voting.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7 }}
        className="bg-blue-600 rounded-lg p-8 text-white cursor-pointer animate-bounce [animation-duration:1.5s] hover:animate-none hover:shadow-lg hover:shadow-slate-700"
      >
        <h3 className="text-lg font-bold mb-2">Step 2: Cast Your Vote</h3>
        <p className="text-sm">Log in to your account, review the ballot, and cast your vote securely through the app.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.9 }}
        className="bg-blue-600 rounded-lg p-8 text-white cursor-pointer  animate-bounce [animation-duration:2s] hover:animate-none hover:shadow-lg hover:shadow-slate-700"
      >
        <h3 className="text-lg font-bold mb-2">Step 3: Track Election Results</h3>
        <p className="text-sm">View real-time election results, ensuring transparency and accountability throughout the process.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.1 }}
        className="bg-blue-600 rounded-lg p-8 text-white cursor-pointer  animate-bounce [animation-duration:2.5s] hover:animate-none hover:shadow-lg hover:shadow-slate-700"
      >
        <h3 className="text-lg font-bold mb-2">Step 4: Verify Election Integrity</h3>
        <p className="text-sm">Confirm that your vote was recorded accurately, and review the audit trail to ensure the integrity of the election.</p>
      </motion.div>
    </motion.div>
    
    {/* CTA */}
    <motion.div 
    initial={{ opacity: 0, x:-200 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }} 
    whileInView={{ opacity: 1, x:0 }}
    viewport={{once: true}}
    className=" lg:py-32 py-16 container mx-auto px-6 lg:px-px"
  >

<motion.div 
    initial={{ opacity: 0, x:-200 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }} 
    whileInView={{ opacity: 1, x:0 }}
    viewport={{once: true}}
        className="bg-stone-200 rounded-lg p-14 text-blue-600 shadow-inner shadow-slate-500 cursor-pointer lg:text-center"
      >
        <h3 className="text-lg font-bold mb-2">Make your decision-making process more modern, safe, & efficient.</h3>
        <p className="text-sm">Upgrade your manual ballot counting to an online election system without jeopardizing the integrity of your vote.</p>

        <div className="flex justify-end gap-1">
            <Image src={'/lagos.png'} alt="logo" width={32} height={40} />
            <Image src={'/logo.png'} alt="logo" width={90} height={90}/>
        </div>
        <a href='https://perspicaciousdev.vercel.app' className="text-sm mt-5 font-bold hover:underline hover:underline-offset-4 hover:decoration-blue-600">~ODELEYE JOHN | Software Developer | Founder, HubPost</a>
      </motion.div>

  </motion.div>

  </>
  );
};

export default Grid;