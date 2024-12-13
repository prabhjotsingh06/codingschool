"use client"
import React from 'react'
import { StickyScroll } from '../ui/sticky-scroll-reveal';
import { BackgroundLines } from "@/components/ui/background-lines";
function WhyChooseUs() {
  const codingSchoolContent = [
    {
      title: 'Master JavaScript: Your Path to Becoming a Coding Pro',
      description:
        'Dive into the world of JavaScript with our comprehensive courses. Our personalized instruction ensures you grasp the fundamentals and advanced concepts, paving the way for your success in the tech industry.',
    },
    {
      title: 'Interactive Learning Experience',
      description:
        'Engage in hands-on projects and real-world scenarios that bring coding to life. Our interactive approach helps you apply what you learn immediately, solidifying your understanding and skills.',
    },
    {
      title: 'Expert Instructors & Mentors',
      description:
        'Learn from industry experts who bring their real-world experience into the classroom. Our mentors are dedicated to your growth, providing insights and guidance every step of the way.',
    },
    {
      title: 'Cutting-Edge Curriculum',
      description:
        'Stay ahead of the curve with our up-to-date curriculum that covers the latest JavaScript frameworks and tools. We ensure you’re learning the most relevant and in-demand skills in the industry.',
    },
    {
      title: 'Career Support & Networking',
      description:
        'Benefit from our career services, including resume building, interview preparation, and networking opportunities. We’re committed to helping you land your dream job in tech.',
    },
    {
      title: '    . ',
      description: '     .',
    },
  ];

  return (
    <div className='h-svh w-svw flex items-center justify-center'>
      <BackgroundLines className='h-svh w-svw flex items-center justify-center'>
      <StickyScroll contentClassName='' content={codingSchoolContent} />
      </BackgroundLines>
    </div>
  )
}

export default WhyChooseUs
