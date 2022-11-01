import React from "react";
import brew from "../../images/brew.png";
import awaken from "../../images/awaken.png";
import work from "../../images/work.jpeg";

const Portfolio = () => {
    return (
    <div className="w-full h-screen bg-slate-900 text-4xl text-gray-50 text-center underline py-10 decoration-blue-400 font-bold">Portfolio    
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
            <div>
                <img src={brew} />
            </div>
            <div>
                <img src={awaken} />
            </div>
            <div>
                <img src={work} />
            </div>
            <div>
                <img src={work} />
            </div>
            <div>
                <img src={work} />
            </div>
            <div>
                <img src={work} />
            </div>
        </div>
     </div>

    )
}
/* <div name='portfolio' className="w-full md:h-screen text-gray-50 bg-slate-900">
//         <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
//             <div className="pb-8">
//                 <p className="text-4xl font-bold inline border-b-4 text-gray-400 border-blue-400">Portfolio</p>
//                 <p className="py-6">Check out some of my recent work!</p>
//             </div>
//             {/* container */
//             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
//                {/* grid item */}
//                 <div style={{ backgroundImage: `url(${brew})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

//                      {/* hover effect */}
//                     <div className="opacity-0 group-hover:opacity-80 text-center">
//                         <span className="text-2xl font-bold text-gray-50 tracking-wider">
//                         BrewView: JS, CSS Application
//                         </span>
//                     <div className="pt-8 text-center">
//                         <a href="/">
//                             <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Demo</button>
//                         </a>
//                         <a href="/">
//                             <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Code</button>
//                         </a>
//                       </div>
//                     </div>
//                 </div>
                
//                 <div style={{ backgroundImage: `url(${awaken})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

//                 {/* hover effect */}
//                 <div className="opacity-0 group-hover:opacity-80 text-center">
//                     <span className="text-2xl font-bold text-gray-50 tracking-wider">
//                         Awaken: Node.js, Express.js, Handlebars Application
//                     </span>
//                 <div className="pt-8 text-center">
//                      <a href="/">
//                         <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Demo</button>
//                     </a>
//                     <a href="/">
//                         <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Code</button>
//                     </a>
//                 </div>
//             </div>
//         </div>
//         <div className="opacity-0 group-hover:opacity-80 text-center">
//                     <span className="text-2xl font-bold text-gray-50 tracking-wider">
//                         Awaken: Node.js, Express.js, Handlebars Application
//                     </span>
//                 <div className="pt-8 text-center">
//                      <a href="/">
//                         <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Demo</button>
//                     </a>
//                     <a href="/">
//                         <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Code</button>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     </div>
//   </div> */}
export default Portfolio;