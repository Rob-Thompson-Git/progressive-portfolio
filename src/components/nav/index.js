import React from "react";
import {useState} from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import resume from '../../images/Robert_Thompson_Software_Engineer.pdf'


function Nav() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-50 
      bg-gradient-to-r from-sky-300 via-slate-900 to-slate-900 nav-noice">
        <div>
            <h1 className="text-white">RT</h1>
        </div>
        {/* menu */}
        <ul className="hidden md:flex">
            <li> 
                <a href="#about">About</a>  
            </li>
            <li>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li>
                <a href="#contact">Contact Me</a>
            </li>
            <li>
                <a href={resume} target={"_blank"} >Resume</a>
            </li>
        </ul>

        {/* hamburg */}
        <div onClick={handleClick} className="md:hidden text-gray-50 z-10">
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-slate-900'}>
            <li className="py-6 text-4xl">Aboute Me</li>
            <li className="py-6 text-4xl">Portfolio</li>
            <li className="py-6 text-4xl">Contact Me</li>
            <li className="py-6 text-4xl">Resume</li>
        </ul>

        {/* socila icons */}
        <div className="flex fixed flex-col top-[35%] left-0 lg:flex">
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                    <a className="flex justify-between items-center w-full text-gray-50" href="/">
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
                    <a className="flex justify-between items-center w-full text-gray-50" href="/">
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600">
                    <a className="flex justify-between items-center w-full text-gray-50" href="/">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-violet-600">
                    <a className="flex justify-between items-center w-full text-gray-50" href="/">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Nav;

