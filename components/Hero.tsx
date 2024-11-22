'use client';
import { motion } from 'motion/react';
import Grid from './Grid';
const Hero = () => {
    return (
        <div>
            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section
  className="relative bg-[url(https://ng.boell.org/sites/default/files/styles/var_larger/public/2022-10/emmanuel-ikwuegbu-5ibsx1ewh7m-unsplash-1.jpg.webp?itok=mL2w_A1h)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

<motion.div
      initial={{ opacity: 0, y:100 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }} 
      whileInView={{ opacity: 1, y:0 }}
      viewport={{once: true}}
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl text-red-500 md:text-rose-500">
        Vote Smart,

        <strong className="block font-extrabold text-blue-700"> Vote LASVEC. </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed md:text-white md:font-semibold">
      The Future of Lagos State is in your hands. Every vote is a declaration of hope and a promise of a brighter tomorrow. LASVEC empowers you to shape the destiny of our beloved state. Make your voice heard and create a better future for yourself, your family, and Lagos.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-transparent focus:outline-none focus:ring active:bg-blue-500 sm:w-auto hover:text-blue-600 hover:border border-blue-500 hover:md:text-white"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow  focus:outline-none focus:ring active:text-blue-500 sm:w-auto hover:bg-blue-600 hover:text-white hover:border border-white"
        >
          Learn More
        </a>
      </div>
    </div>
  </motion.div>
</section>
        </div>
    )
}

export default Hero