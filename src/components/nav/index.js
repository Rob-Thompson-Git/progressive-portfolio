import React from "react";
import {useState} from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import resume from '../../images/Robert_Thompson_Resume22.pdf'
import rt from '../../images/rtLogo.png'


function Nav() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-50 
      bg-gradient-to-r from-sky-300 via-slate-900 to-slate-900 nav-noice">
        <div>
            <img className="max-h-14" src={rt} alt="robert thompson web developer" />
        </div>
        {/* menu */}
        <ul className="hidden md:flex">
            <li> 
                <a href="#skills">Skills</a>  
            </li>
            <li>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li>
                <a href="#contact">Contact Me</a>
            </li>
            <li>
                <a href={resume} target={"_blank"} rel="noreferrer" >Resume</a>
            </li>
        </ul>

        {/* hamburg */}
        <div onClick={handleClick} className="md:hidden text-gray-50 z-10">
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-slate-900'}>
            <li><a className="py-6 text-4xl" href="#skills">Skills</a></li>
            <li><a className="py-6 text-4xl" href="#portfolio">Portfolio</a></li>
            <li><a className="py-6 text-4xl" href="#contact">Contact Me</a></li>
            <li><a className="py-6 text-4xl" href="{resume}">Resume</a></li>
        </ul>

        {/* socila icons */}
        <div className="flex fixed flex-col top-[35%] left-0 lg:flex">
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                    <a className="flex justify-between items-center w-full text-gray-50" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/robert-thompson-web-development/">
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
                    <a className="flex justify-between items-center w-full text-gray-50" target="_blank" rel="noreferrer" href="https://github.com/Rob-Thompson-Git">
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600">
                    <a className="flex justify-between items-center w-full text-gray-50" target="_blank" rel="noreferrer" href="mailto:rob.thomp15@gmail.com">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-violet-600">
                    <a className="flex justify-between items-center w-full text-gray-50" target="_blank" rel="noreferrer" href={resume}>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Nav;

