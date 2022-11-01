import React from 'react';
import img1 from '../../images/me.jpeg';


const About = () => {
    return(
        <div name='about' className='w-full h-screen bg-slate-900 text-gray-50'>
         <div className='flex flex-col justify-center items-center w-full h-full'>
             <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-blue-400'>
                         About
                        </p>
                    </div>
                    <div></div>
                    </div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
                        <div className='text-4xl font-bold'>
                         <img className=' rounded-full' src={img1} />
                    </div>
                    <div>
                    <h2 className='text-4xl font-bold py-4 text-blue-400'>Hi, thanks for stopping by! Please take a look around.</h2>
                     <p className='text-gray-50'>On the front-end, I am proficient in HTML, handlebars, CSS (and frameworks: bootstrap, UIKit and Bulma), JavaScript (both synchronous and asynchronous) and JQuery. Much of my experience on the front-end includes creating web applications revolved around data fetched from a third party API. On the back-end, I am proficient in Node.js (utilizing express.js and inquirer npm packages), MySQL, and the ORM, Sequelize. I have experience working with numerous databases, and creating my own APIs while connecting them to the front-end via model-view-controller architecture.</p>
                 </div>
             </div>
         </div>
     </div>
    )
}

  

          // <div className='grid grid-cols-2 justify-center text-center align-center align-middle'>
        //     <a className=''>
        //         <img className='rounded-full ' src={img1} />
        //     </a>
        //     <div className='col-1 border-1 border-black'>About</div>
            
        // </div>
export default About;