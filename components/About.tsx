'use client';
import { Facebook, Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import { motion } from "motion/react"
import LinkedIn from "next-auth/providers/linkedin"

const About  = () => {
    return (
        <div id="About">
<section className="">
  <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
       className="py-8 px-11 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <motion.div
      initial={{ opacity: 0, y:100 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }} 
      whileInView={{ opacity: 1, y:0 }}
      viewport={{once: true}}
       className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-600 text-left md:text-center">ABOUT US</h2>
          <h3 className="mb-4 text-2xl tracking-tight  text-blue-600 text-left"> <span className="font-bold">LASVEC</span> is Lagos State's Official Electronic Voting System, used to conduct credible and transparent elections from anywhere, at any time.</h3>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl text-left">We aim to revolutionize the electoral process in Lagos State with LASVEC, a cutting-edge e-voting platform designed to make elections more accessible, secure, and transparent.</p>
      </motion.div> 
      <motion.div
      initial={{ opacity: 0, y:100 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }} 
      whileInView={{ opacity: 1, y:0 }}
      viewport={{once: true}} className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h4 className="mb-4 text-4xl tracking-tight text-blue-900 mt-16 lg:mt-24">Management Team</h4>
      </motion.div> 
      <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }} 
      className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        {/* Man 1 */}
        <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1 }} 
  className="items-center bg-gray-100 rounded-lg shadow sm:flex transition-all duration-500 cursor-pointer hover:bg-blue-600 group">
        <a href="https://perspicaciousdev.vercel.app">
        <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="/John.webp" alt="John Avatar"/>
    </a>
        <div className="p-5">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-white">
        <a href="/">ODELEYE JOHN AYOMIDE</a>
        </h3>
        <span className="text-gray-500 group-hover:text-white">Software Developer | Founder, HubPost</span>
        <p className="mt-3 mb-4 font-light text-gray-500 group-hover:text-white">Odeleye John Ayomide (Perspicacious) is a visionary young tech enthusiast and software developer. As founder of HubPost, he's poised to revolutionize the tech world with innovative ideas and solutions.</p>
        <ul className="flex space-x-4 sm:mt-0">
        <li>
            <a href="/" className="text-gray-500 hover:text-white group-hover:text-white">
                               <Youtube className="w-4/5"/>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-gray-500 hover:text-white group-hover:text-white">
                                <Twitter className="w-4/5"/>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-gray-500  hover:text-white group-hover:text-white">
                               <Linkedin className="w-4/5"/>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-gray-500 hover:text-white group-hover:text-white">
                                <Instagram className="w-4/5 "/>
                      </a>
                        </li>
                    </ul>
                </div>
            </motion.div> 

            {/* Man 2 */}
                 <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1 }}  className="items-center bg-gray-100 rounded-lg shadow sm:flex transition-all duration-500 cursor-pointer hover:bg-blue-600 group">
    <a href="/">
        <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode400/2164677/2164677-1661647446915-d2fe2f1a19451.jpg" alt="akintunde Avatar"/>
    </a>
  <div className="p-5">
    <h3 className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-white">
      <a href="https://instagram.com/akintunde_brave" className="group-hover:text-white">AKINTUNDE OPEYEMI IDOWU</a>
    </h3>
    <span className="text-gray-500 group-hover:text-white">Host, All Things Teens Podcast</span>
    <p className="mt-3 mb-4 font-light text-gray-500 group-hover:text-white">Akintunde is the driving force behind @allthingsteenspodcast, a platform where he shares inspiring stories, insightful discussions, and expert advice, catering to the interests and concerns of teenagers and young adults.</p>
    <ul className="flex space-x-4 sm:mt-0">
      <li>
        <a href="/" className="text-gray-500 hover:text-white group-hover:text-white">
        <Facebook className='group-hover:text-white w-4/5'/>
        </a>
      </li>
      <li>
        <a href="/" className="text-gray-500 hover:text-white group-hover:text-white">
        <Twitter className='group-hover:text-white w-4/5' />
        </a>
      </li>
      <li>
        <a href="/" className="text-gray-500 hover:text-white group-hover:text-white">
          <Instagram className='group-hover:text-white w-4/5'/>
        </a>
      </li>
      <li>
        <a href="/" className="text-gray-500 hover:text-white group-hover:text-white">
        <Linkedin className=' group-hover:text-white w-4/5'/>
        </a>
      </li>
    </ul>
  </div>
            </motion.div> 

            {/* Man 3 */}
            <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1 }} 
       className="items-center bg-gray-100 rounded-lg shadow sm:flex transition-all duration-500 cursor-pointer hover:bg-blue-600 group">
    <a href="/">
        <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo400/2164677/2164677-1721211901946-bbc24b23d861b.jpg" alt="Jese Avatar"/>
    </a>
  <div className="p-5">
    <h3 className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-white">
      <a href="/" className="group-hover:text-white">ALL THINGS TEENS PODCAST</a>
    </h3>
    <span className="text-gray-500 group-hover:text-white">"Host & Organizer, All Things Teens Podcast and Annual Teens Summit</span>
    <p className="mt-3 mb-4 font-light text-gray-500 group-hover:text-white">All Things Teens Podcast delves into real conversations and stories that matter to teens.</p>
    <ul className="flex space-x-4 sm:mt-0">
      <li>
        <a href="/" className="text-gray-500 hover:text-white group-hover:text-white">
        <Facebook className='group-hover:text-white w-4/5'/>
        </a>
      </li>
      <li>
        <a href="/" className="text-gray-500 hover:text-white group-hover:text-white">
        <Twitter className='group-hover:text-white w-4/5' />
        </a>
      </li>
      <li>
        <a href="/" className="text-gray-500 hover:text-white group-hover:text-white">
          <Instagram className='group-hover:text-white w-4/5'/>
        </a>
      </li>
      <li>
        <a href="/" className="text-gray-500 hover:text-white group-hover:text-white">
        <Linkedin className=' group-hover:text-white w-4/5'/>
        </a>
      </li>
    </ul>
  </div>
            </motion.div> 

            {/* Man 4 */}
        <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1 }}  className="items-center bg-gray-100 rounded-lg shadow sm:flex transition-all duration-500 cursor-pointer hover:bg-blue-600 group">
    <a href="/">
        <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3f2_JAi-Bkya-51co_g67oeNL3NvcM7ya_Q&s" alt="Inec Avatar"/>
    </a>
  <div className="p-5">
    <h3 className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-white">
      <a href="/" className="group-hover:text-white">INEC</a>
    </h3>
    <span className="text-gray-500 group-hover:text-white"> Host & Organizer of Elections in Nigeria.</span>
    <p className="mt-3 mb-4 font-light text-gray-500 group-hover:text-white">INEC has established physical structures and systems to promote democratic governance and stability in Nigeria through effective electoral management.</p>
    <ul className="flex space-x-4 sm:mt-0">
      <li>
        <a href="/" className="text-gray-500 hover:text-white group-hover:text-white">
        <Facebook className='group-hover:text-white w-4/5'/>
        </a>
      </li>
      <li>
        <a href="/" className="text-gray-500 hover:text-white group-hover:text-white">
        <Twitter className='group-hover:text-white w-4/5' />
        </a>
      </li>
      <li>
        <a href="/" className="text-gray-500 hover:text-white group-hover:text-white">
          <Instagram className='group-hover:text-white w-4/5'/>
        </a>
      </li>
      <li>
        <a href="/" className="text-gray-500 hover:text-white group-hover:text-white">
        <Linkedin className=' group-hover:text-white w-4/5'/>
        </a>
      </li>
    </ul>
  </div>
            </motion.div> 
      </motion.div>  
  </motion.div>
</section>
        </div>
    )
}

export default About