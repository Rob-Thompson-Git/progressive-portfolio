import React from "react";
import brew from "../../images/brew.png";
import pass from "../../images/password_gen.png";
import home from "../../images/home.png";
import weather from '../../images/weather-app-screenshot.png'
import quiz from '../../images/code-quiz-screenshot.png'
import calculator from '../../images/React-calc-screenshot.png'

const Portfolio = () => {
    return (
<div name='portfolio' id='portfolio' className="w-full h-full  text-gray-50 bg-slate-900">
    <div className="max-w-[1000px] mx-auto px-20 flex flex-col justify-center w-full h-full py-[200px] place-self-center">
        <div className="pb-8 place-self-center">
            <p className="text-4xl font-bold underline decoration-gray-50 text-blue-400 place-items-center">Portfolio</p>
            <p className="pt-1 text-xl">Check out my work!</p>
        </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
               {/* grid item */}
                <div style={{ backgroundImage: `url(${brew})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div"
                >

                     {/* hover effect */}
                    <div className="opacity-0 group-hover:opacity-80">
                        <span className="text-2xl font-bold text-gray-50 tracking-wider">
                        BrewView: JS, CSS Application
                        </span>
                    <div className="pt-8 text-center">
                        <a href="https://jack421myhre.github.io/brew-view/" target="_blank" rel="noreferrer">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Demo
                            </button>
                        </a>
                        <a href="https://github.com/jack421myhre/brew-view" target="_blank" rel="noreferrer">
                             <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Code</button>
                         </a>
                       </div>
                     </div>
                </div>
                <div style={{ backgroundImage: `url(${pass})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div"
                >

                     {/* hover effect */}
                    <div className="opacity-0 group-hover:opacity-80">
                        <span className="text-2xl font-bold text-gray-50 tracking-wider">
                        Password Generator: HTML, CSS and JavaScript App
                        </span>
                    <div className="pt-8 text-center">
                        <a href="https://rob-thompson-git.github.io/password-generator/" target="_blank" rel="noreferrer">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Demo
                            </button>
                        </a>
                        <a href="https://github.com/Rob-Thompson-Git/password-generator" target="_blank" rel="noreferrer">
                             <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Code</button>
                         </a>
                       </div>
                     </div>
                </div>
               {/* grid item */}
                <div style={{ backgroundImage: `url(${home})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div"
                >

                     {/* hover effect */}
                    <div className="opacity-0 group-hover:opacity-80">
                        <span className="text-2xl font-bold text-gray-50 tracking-wider">
                        Home: MERN stack, Tailwind CSS Project
                        </span>
                    <div className="pt-8 text-center">
                        <a href="https://github.com/RBL1992/home">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Demo
                            </button>
                        </a>
                        <a href="https://github.com/RBL1992/home">
                             <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Code</button>
                         </a>
                       </div>
                     </div>
                </div>
                <div style={{ backgroundImage: `url(${weather})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div"
                >

                     {/* hover effect */}
                    <div className="opacity-0 group-hover:opacity-80">
                        <span className="text-2xl font-bold text-gray-50 tracking-wider">
                        Weather App: jQuery, CSS, Bootstrap, HTML
                        </span>
                    <div className="pt-8 text-center">
                        <a href="https://rob-thompson-git.github.io/weather-app/" target="_blank" rel="noreferrer">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Demo
                            </button>
                        </a>
                        <a href="https://github.com/Rob-Thompson-Git/weather-app" target="_blank" rel="noreferrer">
                             <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Code</button>
                         </a>
                       </div>
                     </div>
                </div>
               {/* grid item */}
                <div style={{ backgroundImage: `url(${quiz})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div"
                >

                     {/* hover effect */}
                    <div className="opacity-0 group-hover:opacity-80">
                        <span className="text-2xl font-bold text-gray-50 tracking-wider">
                        Code Quiz: JavaScript, CSS, HTML Application
                        </span>
                    <div className="pt-8 text-center">
                        <a href="https://rob-thompson-git.github.io/js-code-quiz/" target="_blank" rel="noreferrer">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Demo
                            </button>
                        </a>
                        <a href="https://github.com/Rob-Thompson-Git/js-code-quiz" target="_blank" rel="noreferrer">
                             <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Code</button>
                         </a>
                       </div>
                     </div>
                </div>
                <div style={{ backgroundImage: `url(${calculator})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div"
                >

                     {/* hover effect */}
                    <div className="opacity-0 group-hover:opacity-80">
                        <span className="text-2xl font-bold text-gray-50 tracking-wider">
                        React Calculator: React.js and CSS App
                        </span>
                    <div className="pt-8 text-center">
                        <a href="https://rob-thompson-git.github.io/react-calculator/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Demo
                            </button>
                        </a>
                        <a href="https://github.com/Rob-Thompson-Git/react-calculator">
                             <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Code</button>
                         </a>
                       </div>
                     </div>
                </div>
            </div>
        </div>
    </div>

    )
}

                
                
export default Portfolio;