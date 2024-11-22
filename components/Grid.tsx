'use client'
import React from "react";
import { motion } from "motion/react";

const Grid = () => {
    return (
      <motion.div
      animate={{
        scale: 2,
        transition: { duration: 2 }
      }}
         className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 lg:py-32">
        <div className="bg-blue-600 rounded-lg p-8 text-white">
          <h3 className="text-lg font-bold mb-2">Step 1: Register to Vote</h3>
          <p className="text-sm">Create an account and verify your identity to ensure secure and legitimate voting.</p>
        </div>
        <div className="bg-blue-600 rounded-lg p-8 text-white">
          <h3 className="text-lg font-bold mb-2">Step 2: Cast Your Vote</h3>
          <p className="text-sm">Log in to your account, review the ballot, and cast your vote securely through the app.</p>
        </div>
        <div className="bg-blue-600 rounded-lg p-8 text-white">
          <h3 className="text-lg font-bold mb-2">Step 3: Track Election Results</h3>
          <p className="text-sm">View real-time election results, ensuring transparency and accountability throughout the process.</p>
        </div>
        <div className="bg-blue-600 rounded-lg p-8 text-white">
          <h3 className="text-lg font-bold mb-2">Step 4: Verify Election Integrity</h3>
          <p className="text-sm">Confirm that your vote was recorded accurately, and review the audit trail to ensure the integrity of the election.</p>
        </div>
      </motion.div>
    );
  };
  
  export default Grid;