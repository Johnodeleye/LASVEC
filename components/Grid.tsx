'use client'
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Grid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 lg:py-32"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-blue-600 rounded-lg p-8 text-white"
      >
        <h3 className="text-lg font-bold mb-2">Step 1: Register to Vote</h3>
        <p className="text-sm">Create an account and verify your identity to ensure secure and legitimate voting.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="bg-blue-600 rounded-lg p-8 text-white"
      >
        <h3 className="text-lg font-bold mb-2">Step 2: Cast Your Vote</h3>
        <p className="text-sm">Log in to your account, review the ballot, and cast your vote securely through the app.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="bg-blue-600 rounded-lg p-8 text-white"
      >
        <h3 className="text-lg font-bold mb-2">Step 3: Track Election Results</h3>
        <p className="text-sm">View real-time election results, ensuring transparency and accountability throughout the process.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="bg-blue-600 rounded-lg p-8 text-white"
      >
        <h3 className="text-lg font-bold mb-2">Step 4: Verify Election Integrity</h3>
        <p className="text-sm">Confirm that your vote was recorded accurately, and review the audit trail to ensure the integrity of the election.</p>
      </motion.div>
    </motion.div>
  );
};

export default Grid;