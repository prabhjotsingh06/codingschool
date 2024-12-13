'use client'
import React from 'react'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

function TestimonialCards() {
    const codingSchoolTestimonials = [
        {
          quote:
            'Attending this coding school was a game-changer for my career. The instructors are industry experts who truly care about your success.',
          name: 'Jordan Smith',
          title: 'Full-Stack Developer',
        },
        {
          quote:
            "The community and support here are incredible. I've not only learned to code but also built a network of like-minded professionals.",
          name: 'Taylor Brown',
          title: 'Front-End Developer',
        },
        {
          quote:
            "This school provided me with the skills and confidence to land my dream job. The personalized mentorship was invaluable.",
          name: 'Morgan Lee',
          title: 'Data Scientist',
        },
        {
          quote:
            'As a software engineer, finding the right learning environment was crucial. This school matched me with mentors who understood my goals and challenges.',
          name: 'Casey Johnson',
          title: 'Software Engineer',
        },
        {
          quote:
            'The project-based learning approach here opened my eyes to real-world coding challenges. Highly recommend for any aspiring developers!',
          name: 'Alex Martinez',
          title: 'Back-End Developer',
        },
      ];
      
  return (
    <section className='h-svh w-[97svw] flex flex-col items-center justify-center'>
        <h1 className='text-3xl md:text-4xl text-center font-bold mb-8'>Success Stories</h1>
      <div className='w-[97svw] '>
        <div className='w-[97svw'>
            <InfiniteMovingCards items={codingSchoolTestimonials} speed='normal' />
        </div>
      </div>
    </section>
  )
}

export default TestimonialCards
