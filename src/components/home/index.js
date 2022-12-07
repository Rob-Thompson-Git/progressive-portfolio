import React from 'react';


const Home = () => {
    return (
     <div name='home' className=' bg-slate-900 w-full h-full'>
        {/* container items */}
        <div className='max-w-[1000px] mx-auto justify-center flex flex-wrap px-8 py-[200px] w-50%'>
            <div className=' border-l-sky-300 border-l-8 pl-10 -pr-10 '>
                <p className='text-gray-50 text-2xl'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-blue-400'>Rob Thompson</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-slate-400'>I'm a creative, full-stack web developer</h2>
                <p className=' text-gray-50 py-4 text-xl max-w-[800px]'>I am a creative, full stack web developer with a background in health sciences and pharmacy. Through my coding experience, I developed a strong adaptability to new technologies, as well as strength in refactoring code and resolving bugs. During pharmacy school, I created an educational pharmacy website/ Instagram for my classmates and decided to transition into computer science to fulfill my web development passion. I completed the full stack coding boot camp at Northwestern University where I learned years of computer science knowledge and technical skills to create modern frontend, command line, and full stack web applications.</p>
                <a href="#portfolio">
                    <button className='border-blue-400 text-blue-400 border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-400 hover:border-blue-400 hover:text-white'>View Work
                    </button>
                </a>
                {/* <div>
                    <img src={img1} className="rounded-full"/>
                </div>   */}
           </div>
        </div>
    </div>
    )
}

export default Home;