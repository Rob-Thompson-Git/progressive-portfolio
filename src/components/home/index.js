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
                <p className=' text-gray-50 py-4 text-xl max-w-[800px]'>I am a web developer in Chicago currently completing a 3 month, full-stack coding bootcamp at Northwestern University. On the front-end, I am proficient in HTML, handlebars, CSS (and frameworks: bootstrap, UIKit and Bulma), JavaScript (both synchronous and asynchronous) and JQuery. Much of my experience on the front-end includes creating web applications revolved around data fetched from a third party API. On the back-end, I am proficient in Node.js (utilizing express.js and inquirer npm packages), MySQL, and the ORM, Sequelize. I have experience working with numerous databases, and creating my own APIs while connecting them to the front-end via model-view-controller architecture.</p>
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