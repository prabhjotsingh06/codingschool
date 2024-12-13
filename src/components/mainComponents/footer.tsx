
function Footer() {
    return (
        <footer className='flex flex-col gap-8 justify-center items-center py-8 w-svw h-auto'>
                    <div className='flex flex-wrap gap-8 justify-center items-center py-8 w-svw'>
                        <div className='w-60 border-2 dark:border-white p-2 rounded-xl h-72'>
                            <h1 className=' font-semibold text-2xl mb-4'>About Us</h1>
                            <p>At Our School, we're on a mission to empower the next generation of tech innovators. We provide high-quality, hands-on coding education designed to equip students with the skills they need to thrive in today’s fast-paced digital world.</p>
                        </div>
                        <div className='w-60 border-2 dark:border-white p-2 rounded-xl h-72'>
                            <h1 className=' font-semibold text-2xl mb-4'>Contact Us</h1>
                            <p>M.NO:9999999999</p>
                            <p>Email:Codingschool@gmail.com</p>
                            <p>website:Codingschool.com</p>
                        </div>
                        <div className='w-60 border-2 dark:border-white p-2 rounded-xl h-72'>
                            <h1 className=' font-semibold text-2xl mb-4'>Follow Us</h1>
                            <p>instagram</p>
                            <p>facebook</p>
                            <p>twiter</p>
                        </div>
                        <div className='w-60 border-2 dark:border-white p-2 rounded-xl h-72'>
                            <h1 className=' font-semibold text-2xl mb-4'>Quick Links</h1>
                            <p>Home</p>
                            <p>Course</p>
                            <p>About</p>
                        </div>
                    </div>
                    <p className='text-center text-xs'>2024, Coding School</p>
        </footer >
    )
}

export default Footer
