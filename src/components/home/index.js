import React from 'react';
import img1 from '../../images/me.jpeg';

const Home = () => {
    return (
     <div className=' bg-slate-900 py-10 w-full h-screen'>   
        <div className='flex justify-center w-50% align-s py-10 m-10 '>
            <div className='flex-1 pl-[135px]'>
                <img src={img1} className="rounded-full pl-[10px]"/>
            </div>
            <div className='flex-1 h-full border-l-sky-300 border-l-8 pl-10 -pr-10'>
                <p className='text-white'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-blue-400'>Rob Thompson</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-slate-400'>I'm a creative, full-stack web developer</h2>
                <p className=' text-slate-400 py-4 max-w-[700px]'>I am a web developer in Chicago currently completing a 3 month, full-stack coding bootcamp at Northwestern University. On the front-end, I am proficient in HTML, handlebars, CSS (and frameworks: bootstrap, UIKit and Bulma), JavaScript (both synchronous and asynchronous) and JQuery. Much of my experience on the front-end includes creating web applications revolved around data fetched from a third party API. On the back-end, I am proficient in Node.js (utilizing express.js and inquirer npm packages), MySQL, and the ORM, Sequelize. I have experience working with numerous databases, and creating my own APIs while connecting them to the front-end via model-view-controller architecture.</p>
                <div>
                    <button className='border-blue-400 text-blue-400 border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-400 hover:border-blue-400 hover:text-white'>View Work</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home;