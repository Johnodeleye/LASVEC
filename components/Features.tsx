'use client';
import { Accessibility, Aperture, Blend, ChevronRight, Languages, LockKeyhole, ShieldCheck } from "lucide-react"
import { motion } from "motion/react"

const Features = () => {
    return (
        <>
        <section className="pt-5 pb-5">
        <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
             className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <motion.div
      initial={{ opacity: 0, y:100 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }} 
      whileInView={{ opacity: 1, y:0 }}
      viewport={{once: true}}
        className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
                    <div className="relative w-full text-center lg:text-left lg:w-2/4">
                        <h2 className="text-4xl font-bold text-blue-600 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">Enjoy the Exclusive Features with Easy LASVEC</h2>
                    </div>
                    <div className="relative w-full text-center  lg:text-left lg:w-2/4">
                        <p className="text-lg font-normal text-gray-500 mb-5">LASVEC is revolutionizing the way we vote. Our secure, transparent, and easy-to-use e-voting system ensures that every vote is counted accurately and efficiently. </p>
                        <a href="#" className="flex flex-row items-center justify-center gap-2 text-base font-semibold text-blue-600 lg:justify-start hover:text-blue-700 ">Learn more
                            <ChevronRight color="blue" />
                        </a>
                    </div>
                </motion.div>

                <div className="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                    <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }} 
                    className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-blue-600">
                        <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                            <LockKeyhole color="blue" />

                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Secure Voting Process</h4>
                        <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                            LASVEC ensures a secure voting process with end-to-end encryption, protecting the integrity of every vote.
                        </p>
                    </motion.div>

                    <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                    className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-blue-600">
                        <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                            <Aperture color="blue" />

                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Easy Voter Registration</h4>
                        <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                            Registering to vote is easy and straightforward with LASVEC, reducing barriers to participation.
                        </p>
                    </motion.div>

                    <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.5 }}
                    className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-blue-600">
                        <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                            <Accessibility color="blue" />

                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Accessible Voting </h4>
                        <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                            LASVEC's e-voting system is accessible from anywhere, at any time, making it easier for citizens to exercise their right to vote.
                        </p>
                    </motion.div>

                    <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
                    className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-blue-600">
                        <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                            <Blend color="blue" />

                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Transparent Results</h4>
                        <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                            LASVEC provides real-time, transparent results, ensuring the integrity of the electoral process.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>

        <section className="pb-24 ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
                        <div className="relative w-full text-center lg:text-left lg:w-2/4">
                            <h2 className="text-4xl font-bold text-blue-600 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">Enjoy the Exclusive Features with Easy LASVEC</h2>
                        </div>
                        <div className="relative w-full text-center  lg:text-left lg:w-2/4">
                            <p className="text-lg font-normal text-gray-500 mb-5">LASVEC is revolutionizing the way we vote. Our secure, transparent, and easy-to-use e-voting system ensures that every vote is counted accurately and efficiently. </p>
                            <a href="#" className="flex flex-row items-center justify-center gap-2 text-base font-semibold text-blue-600 lg:justify-start hover:text-blue-700 ">Learn more
                                <ChevronRight color="blue" />
                            </a>
                        </div>
                    </div> */}
                    <div className="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                        <motion.div 
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1, delay: 0.5 }}
                        className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-blue-600">
                            <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                                <LockKeyhole color="blue" />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Real-Time Results Update</h4>
                            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                            LASVEC provides real-time updates on election results, keeping citizens informed and engaged throughout the process.
                            </p>
                        </motion.div>

                        <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-blue-600">
                            <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                                <Aperture color="blue" />

                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">User-Friendly Interface</h4>
                            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                            LASVEC's intuitive interface makes it easy for voters to navigate and cast their ballots.
                            </p>
                        </motion.div>

                        <motion.div 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-blue-600">
                            <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                                <Languages  color="blue" />

                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Multi-Language Support</h4>
                            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                            LASVEC supports multiple languages, ensuring that all citizens can participate in the electoral process, regardless of their language proficiency.
                            </p>
                        </motion.div>

                        <motion.div 
                        initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1 }}
                         viewport={{ once: true }}
                         transition={{ duration: 1, delay: 0.5 }}
                        className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-blue-600">
                            <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                                <ShieldCheck color="blue" />

                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Voter Verification</h4>
                            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                            LASVEC's system ensures that only eligible voters can cast ballots, protecting the integrity of the electoral process.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            </>
                                            
    )
}

export default Features