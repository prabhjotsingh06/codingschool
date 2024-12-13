"use client"
import Link from 'next/link';
import React from 'react'
import courseData from "@/data/code.json";
import { BackgroundGradient } from '../ui/background-gradient';
import { Button } from "@/components/ui/moving-border";

interface course  {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
  }
function Featuredcourses() {
    const featuredCourses = courseData.courses.filter( (course:course) => course.isFeatured )
  return (
    <section className='dark:text-white h-[100svh] flex items-center flex-col gap-3 justify-end'>
      <div>
        <h1 className='text-5xl dark:text-green-400'>Featured Courses</h1>
        <p className='text-center mt-5 text-base' >Learn Form Basic</p>
      </div>
      <div className='grid gap-6 lg:grid-cols-3 w-[100svw] justify-center sm:grid-cols-2 grid-cols-1 overflow-auto py-14 px-20 hide-scrollbar'>
        {featuredCourses.map((course:course) => (
            <div className="rounded-lg">
             <BackgroundGradient className="rounded-[10px] text-center overflow-hidden bg-white p-3 min-h-full dark:bg-gray-800">
                <div className='flex flex-col h-48 items-center justify-evenly'>
                  <h1 className='text-center text-2xl dark:text-green-400'>{course.title}</h1>
                  <p className='text-base p-2'>{course.description}</p>
                  <Link href={`/${course.slug}`}>Learn more..</Link>
                </div>
            </BackgroundGradient>
            </div>
        ))}
      </div>
      <div className='mb-5'>
      <BackgroundGradient className="rounded-[22px] text-center overflow-hidden bg-white p-3 dark:bg-gray-800">
          <Link href={"/course"}> All Courses</Link>
        </BackgroundGradient>
      </div>
    </section>
  )
}

export default Featuredcourses
