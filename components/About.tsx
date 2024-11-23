import { div } from "framer-motion/client"
import { Facebook, Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

const About  = () => {
    return (
        <div id="About">
<section className="">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-600 text-left md:text-center">ABOUT US</h2>
          <h3 className="mb-4 text-2xl tracking-tight  text-blue-600 text-left"> <span className="font-bold">LASVEC</span> is Lagos State's Official Electronic Voting System, used to conduct credible and transparent elections from anywhere, at any time.</h3>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl text-left">We aim to revolutionize the electoral process in Lagos State with LASVEC, a cutting-edge e-voting platform designed to make elections more accessible, secure, and transparent.</p>
      </div> 
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h4 className="mb-4 text-4xl tracking-tight text-blue-900 mt-16 lg:mt-24">Management Team</h4>
      </div> 
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        {/* Man 1 */}
          <div className="items-center bg-gray-100 rounded-lg shadow sm:flex transition-all duration-500 cursor-pointer hover:bg-blue-600 group">
    <a href="#">
        <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"/>
    </a>
        <div className="p-5">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-white">
        <a href="#">ODELEYE JOHN AYOMIDE</a>
        </h3>
        <span className="text-gray-500 group-hover:text-white">Software Developer | Founder, HubPost</span>
        <p className="mt-3 mb-4 font-light text-gray-500 group-hover:text-white">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
        <ul className="flex space-x-4 sm:mt-0">
        <li>
            <a href="#" className="text-gray-500 hover:text-white group-hover:text-white">
                               <Youtube className="w-4/5"/>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 hover:text-white group-hover:text-white">
                                <Twitter className="w-4/5"/>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500  hover:text-white group-hover:text-white">
                               <Github className="w-4/5"/>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 hover:text-white group-hover:text-white">
                                <Instagram className="w-4/5 "/>
                      </a>
                        </li>
                    </ul>
                </div>
            </div> 

            {/* Man 2 */}
            <div className="items-center bg-gray-100 rounded-lg shadow sm:flex transition-all duration-500 cursor-pointer hover:bg-blue-600 group">
    <a href="#">
        <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Avatar"/>
    </a>
  <div className="p-5">
    <h3 className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-white">
      <a href="#" className="group-hover:text-white">Jese Leos</a>
    </h3>
    <span className="text-gray-500 group-hover:text-white">CTO</span>
    <p className="mt-3 mb-4 font-light text-gray-500 group-hover:text-white">Jese drives the technical strategy of the flowbite platform and brand.</p>
    <ul className="flex space-x-4 sm:mt-0">
      <li>
        <a href="#" className="text-gray-500 hover:text-white group-hover:text-white">
        <Facebook className='group-hover:text-white w-4/5'/>
        </a>
      </li>
      <li>
        <a href="#" className="text-gray-500 hover:text-white group-hover:text-white">
        <Twitter className='group-hover:text-white w-4/5' />
        </a>
      </li>
      <li>
        <a href="#" className="text-gray-500 hover:text-white group-hover:text-white">
          <Instagram className='group-hover:text-white w-4/5'/>
        </a>
      </li>
      <li>
        <a href="#" className="text-gray-500 hover:text-white group-hover:text-white">
        <Linkedin className=' group-hover:text-white w-4/5'/>
        </a>
      </li>
    </ul>
  </div>
            </div> 

            {/* Man 3 */}
            <div className="items-center bg-gray-100 rounded-lg shadow sm:flex transition-all duration-500 cursor-pointer hover:bg-blue-600 group">
    <a href="#">
        <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Avatar"/>
    </a>
  <div className="p-5">
    <h3 className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-white">
      <a href="#" className="group-hover:text-white">Jese Leos</a>
    </h3>
    <span className="text-gray-500 group-hover:text-white">CTO</span>
    <p className="mt-3 mb-4 font-light text-gray-500 group-hover:text-white">Jese drives the technical strategy of the flowbite platform and brand.</p>
    <ul className="flex space-x-4 sm:mt-0">
      <li>
        <a href="#" className="text-gray-500 hover:text-white group-hover:text-white">
        <Facebook className='group-hover:text-white w-4/5'/>
        </a>
      </li>
      <li>
        <a href="#" className="text-gray-500 hover:text-white group-hover:text-white">
        <Twitter className='group-hover:text-white w-4/5' />
        </a>
      </li>
      <li>
        <a href="#" className="text-gray-500 hover:text-white group-hover:text-white">
          <Instagram className='group-hover:text-white w-4/5'/>
        </a>
      </li>
      <li>
        <a href="#" className="text-gray-500 hover:text-white group-hover:text-white">
        <Linkedin className=' group-hover:text-white w-4/5'/>
        </a>
      </li>
    </ul>
  </div>
            </div> 

            {/* Man 4 */}
            <div className="items-center bg-gray-100 rounded-lg shadow sm:flex transition-all duration-500 cursor-pointer hover:bg-blue-600 group">
    <a href="#">
        <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Avatar"/>
    </a>
  <div className="p-5">
    <h3 className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-white">
      <a href="#" className="group-hover:text-white">Jese Leos</a>
    </h3>
    <span className="text-gray-500 group-hover:text-white">CTO</span>
    <p className="mt-3 mb-4 font-light text-gray-500 group-hover:text-white">Jese drives the technical strategy of the flowbite platform and brand.</p>
    <ul className="flex space-x-4 sm:mt-0">
      <li>
        <a href="#" className="text-gray-500 hover:text-white group-hover:text-white">
        <Facebook className='group-hover:text-white w-4/5'/>
        </a>
      </li>
      <li>
        <a href="#" className="text-gray-500 hover:text-white group-hover:text-white">
        <Twitter className='group-hover:text-white w-4/5' />
        </a>
      </li>
      <li>
        <a href="#" className="text-gray-500 hover:text-white group-hover:text-white">
          <Instagram className='group-hover:text-white w-4/5'/>
        </a>
      </li>
      <li>
        <a href="#" className="text-gray-500 hover:text-white group-hover:text-white">
        <Linkedin className=' group-hover:text-white w-4/5'/>
        </a>
      </li>
    </ul>
  </div>
            </div> 
      </div>  
  </div>
</section>
        </div>
    )
}

export default About