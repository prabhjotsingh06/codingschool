'use client'
import React from 'react'
import { WobbleCard } from '../ui/wobble-card';
interface webinar {
    title: string,
    description: string,
    slug: string,
    isFeatured: boolean,
}
function UpcomingWebinars() {
    const featuredWebinars = [
        {
            title: 'Introduction to Python Programming',
            description:
                'Learn the basics of Python programming and start your coding journey.',
            slug: 'introduction-to-python-programming',
            isFeatured: true,
        },
        {
            title: 'Web Development with HTML & CSS',
            description:
                'Build and style your own websites using HTML and CSS.',
            slug: 'web-development-html-css',
            isFeatured: true,
        },
        {
            title: 'JavaScript for Beginners',
            description:
                'Get started with JavaScript and learn how to make your websites interactive.',
            slug: 'javascript-for-beginners',
            isFeatured: true,
        },
        {
            title: 'Data Science with Python',
            description:
                'Explore data science concepts and tools using Python.',
            slug: 'data-science-with-python',
            isFeatured: true,
        },
        // Added two more webinars
        {
            title: 'Machine Learning Basics',
            description:
                'Understand the fundamentals of machine learning and its applications.',
            slug: 'machine-learning-basics',
            isFeatured: true,
        },
        {
            title: 'Cybersecurity Essentials',
            description:
                'Learn the basics of cybersecurity and how to protect your digital assets.',
            slug: 'cybersecurity-essentials',
            isFeatured: true,
        },
    ];

    return (
        <section className='dark:text-white h-[100svh] bg-gray-800 flex items-center flex-col gap-3 justify-end'>
            <div>
                <h1 className='text-5xl dark:text-blue-400'>Upcoming Webinars</h1>
                <p className='text-center mt-5 text-base' >Boost Yours Skils</p>
            </div>
            <div className='grid gap-6 lg:grid-cols-3 w-[100svw] justify-center sm:grid-cols-2 grid-cols-1 overflow-auto py-14 px-20 hide-scrollbar'>{
                featuredWebinars.map((webinar: webinar) => (
                    <div>
                        <WobbleCard
                            containerClassName="h-full bg-blue-800 ">
                            <h1 className='text-xl mb-3'>{webinar.title}</h1>
                            <p className=''>{webinar.description}</p>
                        </WobbleCard>
                    </div>))}
            </div>
        </section>
    )
}

export default UpcomingWebinars
