
import brew from "../../images/brew.png";
import awaken from "../../images/awaken.png";
// import work from "../../images/work.jpeg";




const Portfolio = () => {
    return (
<div name='portfolio' id='portfolio' className="w-full h-full  text-gray-50 bg-slate-900">
    <div className="max-w-[1000px] mx-auto px-20 flex flex-col justify-center w-full h-full py-[200px] place-self-center">
        <div className="pb-8 place-self-center">
            <p className="text-4xl font-bold border-b-4 text-gray-50 border-blue-400">Portfolio</p>
            <p className="pt-2">Check out my work!</p>
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
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Demo
                            </button>
                        </a>
                        <a href="/">
                             <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Code</button>
                         </a>
                       </div>
                     </div>
                </div>
                <div style={{ backgroundImage: `url(${awaken})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div"
                >

                     {/* hover effect */}
                    <div className="opacity-0 group-hover:opacity-80">
                        <span className="text-2xl font-bold text-gray-50 tracking-wider">
                        BrewView: JS, CSS Application
                        </span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Demo
                            </button>
                        </a>
                        <a href="/">
                             <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Code</button>
                         </a>
                       </div>
                     </div>
                </div>
               {/* grid item */}
                <div style={{ backgroundImage: `url(${brew})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div"
                >

                     {/* hover effect */}
                    <div className="opacity-0 group-hover:opacity-80">
                        <span className="text-2xl font-bold text-gray-50 tracking-wider">
                        BrewView: JS, CSS Application
                        </span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Demo
                            </button>
                        </a>
                        <a href="/">
                             <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Code</button>
                         </a>
                       </div>
                     </div>
                </div>
                <div style={{ backgroundImage: `url(${awaken})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div"
                >

                     {/* hover effect */}
                    <div className="opacity-0 group-hover:opacity-80">
                        <span className="text-2xl font-bold text-gray-50 tracking-wider">
                        BrewView: JS, CSS Application
                        </span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Demo
                            </button>
                        </a>
                        <a href="/">
                             <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Code</button>
                         </a>
                       </div>
                     </div>
                </div>
               {/* grid item */}
                <div style={{ backgroundImage: `url(${brew})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div"
                >

                     {/* hover effect */}
                    <div className="opacity-0 group-hover:opacity-80">
                        <span className="text-2xl font-bold text-gray-50 tracking-wider">
                        BrewView: JS, CSS Application
                        </span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Demo
                            </button>
                        </a>
                        <a href="/">
                             <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Code</button>
                         </a>
                       </div>
                     </div>
                </div>
                <div style={{ backgroundImage: `url(${awaken})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div"
                >

                     {/* hover effect */}
                    <div className="opacity-0 group-hover:opacity-80">
                        <span className="text-2xl font-bold text-gray-50 tracking-wider">
                        BrewView: JS, CSS Application
                        </span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-500 font bold text-lg">Demo
                            </button>
                        </a>
                        <a href="/">
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