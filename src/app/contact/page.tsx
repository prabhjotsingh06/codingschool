import React from 'react'
import { Meteors } from '@/components/ui/meteors'
function Contact() {
  return (
    <section className='flex items-center justify-center h-svh max-w-[100svw] w-[99svw]'>
        <div className=" w-full relative max-w-md">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Write Your Meassage Here
            </h1>

            <textarea className="font-normal text-base text-slate-500 mb-4 relative z-50 bg-inherit w-full border-2 border-gray-500 rounded-md">
            </textarea>

            <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
              Send
            </button>

            <Meteors number={20} />
          </div>
        </div>
    </section>
  )
}

export default Contact
