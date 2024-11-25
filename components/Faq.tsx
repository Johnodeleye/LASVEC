'use client';
import { motion } from "motion/react";
import React, { useState } from "react";

const Accordion = () => {
  return (
    <section className="relative z-20 overflow-hidden pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px] px-11" id="Faq">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }} 
        className="container mx-auto">
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }} 
        className="-mx-4 flex flex-wrap">
          <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }} 
        className="w-full px-4">
            <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }} 
            className="mx-auto mb-[60px] max-w-[520px] text-left md:text-center lg:mb-20">
              <span className="mb-2 block text-4xl font-semibold text-blue-600">
              Frequently Asked Questions
              </span>
              <h2 className="mb-4 text-3xl font-bold text-blue-600 sm:text-[40px]/[48px]">
              Get Answers to Your Voting Questions
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
              Find helpful information regarding LASVEC's e-voting process.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
       initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.1 }}  
        className="-mx-4 flex flex-wrap">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}  className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What is LASVEC?"
              text="LASVEC is the Lagos State Electronic Voting System, designed to conduct credible and transparent elections in Lagos State."
            />
            <AccordionItem
              header="How do I register to vote?"
              text="To register, create an account on the LASVEC portal and verify your identity to ensure secure and legitimate voting."
            />
        <AccordionItem
        header="What are the requirements for registration?"
        text="To register, you'll need to provide the following:


        • Valid ID Card (Driver’s License/International Passport/National ID Card)
        • Passport Photograph
        • Birth Certificate
        • Proof of Lagos State Residency (e.g., utility bill, lease agreement)
        • Valid email address
        • Valid phone number
        • Unique username and password for your LASVEC account"
      />
          </motion.div>
          <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}  className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What are the benefits of using LASVEC?"
              text="LASVEC provides a secure, transparent, and efficient e-voting platform, ensuring the integrity and accuracy of elections."
            />
            <AccordionItem
              header="How do I cast my vote?"
              text="Log in to your LASVEC account, review the ballot, and cast your vote securely through the app ."
            />
            <AccordionItem
              header="Can I track election results?"
              text="Yes, LASVEC provides real-time election results, ensuring transparency and accountability throughout the process ."
            />
          </motion.div>
        </motion.div>

        <motion.div
       initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.1 }}  
        className="-mx-4 flex flex-wrap">
          
        <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}  className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How does LASVEC ensure the integrity of elections?"
              text="LASVEC uses end-to-end encryption, secure voter authentication, and real-time results to ensure the integrity and accuracy of elections."
            />
            <AccordionItem
            header="What is the minimum age required to vote?"
            text="The minimum age required to vote is 18 years. According to the Constitution, every citizen who has attained the age of 18 is eligible to vote ¹."
            />
            <AccordionItem
              header="Is my personal information secure?"
              text="Yes, LASVEC ensures the security and confidentiality of all personal information and voting data."
            />
          </motion.div>
                    
          <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}  className="w-full px-4 lg:w-1/2">
        <AccordionItem
          header="Can i change my vote after submitting it?"
          text="No once you've submitted your vote, it cannot be changed. please enure you've selected the correct options before submitting."
        />
        <AccordionItem
          header="How do i report any issues or concerns during the voting process?"
          text="You can contact the LASVEC support team via phone, email, or through the in-app support chat."
        />
        <AccordionItem
          header="Is my vote confidential and secured?"
          text="Yes, LASVEC ensures the confidentiality and security of all votes. Your Personal infromation and voting data are protected and secure."
        />
      </motion.div>
        </motion.div>

      </motion.div>

      <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1 }} 
        className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </section>
  );
};

export default Accordion;

const AccordionItem = ({ header, text }: any ) => {
  const [active, setActive] = useState(false);

  const handleToggle = (event: any) => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className="mb-8 w-full rounded-lg bg-white text-blue-600 p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={(event) => handleToggle(event)}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-blue-600 text-white">
          <svg
            className={`fill-white stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold">
            {header}
          </h4>
        </div>
      </button>

      <motion.div
       initial={{ opacity: 0, y: 100 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.0 }} 
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
      </motion.div>
    </div>
  );
};
