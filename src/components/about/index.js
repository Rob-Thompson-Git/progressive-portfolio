import React from 'react';
import img1 from '../../images/me.jpeg';
import htmlIcon from '../../images/html5.png';
import cssIcon from '../../images/css.png'


const About = () => {
    return(
<div>
<div className="bg-slate-900 px-10">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:items-center lg:gap-8">
          <div className="mt-8 grid grid-cols-2 gap-1 lg:mt-0 lg:grid-cols-2">
            <div className='col-span-1 flex'> 
            <img src={img1} className="rounded-full p-5" alt="rob thompson web development"/>
            </div>
            <div className='place-self-center left-0'>
                <h1 className='text-sky-400 text-4xl font-bold mb-4 pb-2 b'>Technologies</h1>
                <p className='text-gray-50 '>JavaScript (both synchronous and asynchronous) and JQuery. Much of my experience on the front-end includes creating web applications revolved around data</p>
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-4 px-8">
              <img
                className="max-h-20"
                src={htmlIcon}
                alt="Workcation"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-4 px-8">
              <img className="max-h-20" src={cssIcon} alt="Mirage" />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img className="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg"
                alt="Laravel"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"
                alt="Statamic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}


export default About;

    {/* //     <div name='about' id="about" className='w-full h-full bg-slate-900 text-gray-50 py-1'>
    //      <div className='flex flex-col justify-items-center items-center py-[50px]'>
    //          <div className='max-w-[1000px] grid grid-cols-2 gap-8 '>
    //                 <div className=' pb-8 '>
    //                     <h1 className='text-4xl font-bold inline border-b-4 border-blue-400'>
    //                      About Me
    //                     </h1>
    //                 </div>
    //                 </div>
    //                 <div className=' grid sm:grid-cols-2 gap-8 '>
    //                     <div className='place-self-center md:place-self-center text-align-center w-3/5'>
    //                         <img className=' rounded-full place-self-center' src={img1} alt="rob thompson web development" />
    //                     </div>
    //                     <div className='border-t-8 text-center place-self-center w-[75%] border-t-red-500  sm:border-t-0 sm:border-l-8 sm:border-l-red-500 
    //                     px-10'>
    //                         <h2 className='text-4xl font-bold pt-6 text-start  text-blue-400'>Hi, thanks for stopping by! Please take a look around.</h2>
    //                         <p className='text-gray-50 text-2xl text-start pt-2'>On the front-end, I am proficient in HTML, handlebars, CSS (and frameworks: bootstrap, UIKit and Bulma), JavaScript (both synchronous and asynchronous) and JQuery. Much of my experience on the front-end includes creating web applications revolved around data</p>
    //              </div>
    //          </div>
    //      </div>
    //  </div> */}