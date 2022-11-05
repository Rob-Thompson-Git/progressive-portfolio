import React from 'react';
import img1 from '../../images/me.jpeg';


const About = () => {
    return(
        <div name='about' id="about" className='w-full h-full bg-slate-900 text-gray-50 py-1'>
         <div className='flex flex-col justify-items-center items-center h-full'>
             <div className='max-w-[1000px] grid grid-cols-2 gap-8 '>
                    <div className=' pb-8 '>
                        <h1 className='text-4xl font-bold inline border-b-4 border-blue-400'>
                         About Me
                        </h1>
                    </div>
                    </div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8  '>
                         <img className=' rounded-full block w-[70%] h-auto mb-6' src={img1} alt="rob thompson web development" />
                    <div className='border-t-8 w-[75%] border-t-red-500  sm:border-t-0 sm:border-l-8 sm:border-l-rose-900 text-center '>
                    <h2 className='text-4xl font-bold pt-10 text-start  text-blue-400'>Hi, thanks for stopping by! Please take a look around.</h2>
                     <p className='text-gray-50 text-2xl text-start pt-2'>On the front-end, I am proficient in HTML, handlebars, CSS (and frameworks: bootstrap, UIKit and Bulma), JavaScript (both synchronous and asynchronous) and JQuery. Much of my experience on the front-end includes creating web applications revolved around data fetched from a third party API. On the back-end, I am proficient in Node.js (utilizing express.js and inquirer npm packages), MySQL, and the ORM, Sequelize. I have experience working with numerous databases, and creating my own APIs while connecting them to the front-end via model-view-controller architecture.</p>
                 </div>
             </div>
         </div>
     </div>
    )
}


export default About;