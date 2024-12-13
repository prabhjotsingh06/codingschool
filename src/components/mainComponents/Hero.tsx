"use client"
import Link from 'next/link'
// import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import { AuroraBackground } from '../ui/aurora-background';

function Hero() {
  return (

    <section className='h-[100svh] bg-gray-800 flex rounded-md items-center justify-end overflow-hidden'>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
        <div className='px-5 pt-20 flex flex-col items-center justify-evenly h-[100svh]
      w-[100dvw]'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className="mx-auto text-3xl sm:text-4xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">Master the art of Coding</h1>
            <p className='m-5 sm:mx-20 lg:mx-40 mt-4 sm:mt-8 text-base font-normal text-transparent md:text-lg bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 text-justify max-h-[50svh] overflow-hidden '>The art of coding is a blend of creativity and technical precision, where logic meets imagination. It’s the process of transforming abstract ideas into tangible software that can solve problems, entertain, and connect us in ways that were once thought impossible. Coders craft intricate patterns of code, much like artists use brushstrokes to create a masterpiece. They design algorithms that power everything from mobile apps to complex systems that drive industries. Each line of code is a building block, meticulously placed to construct robust and efficient solutions. The beauty of coding lies in its ability to bring innovative concepts to life, making it a powerful tool for creation and expression in the digital age. Through coding, we not only build functional applications but also push the boundaries of what technology can achieve, continually reshaping the world around us.</p>
          </div>
          <div className=' mt-10 sm:m-16'>
            <Button
              borderRadius="1.5rem"
              className="text-black bg-white border-2 dark:bg-gray-700 dark:text-white border-neutral-200 dark:border-slate-800 py-3 px-6"><Link href={"/course"}> All Courses</Link></Button>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
    </section>
  )
}

export default Hero
