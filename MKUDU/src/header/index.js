import { useState } from "react";
import { Link } from "react-router-dom";
//import Link from "next/link";
//import { Bars3CenterLeftIcon } from '@heroicons/react/24/solid'



export default function Header (){
    const [hamburgerMenu, setHamburgerMenu] = useState(false);


    const routes = [
        {name: "Home", url:"/" },
        {name: "About us", url:"about-us" },
        {name: "Contact us", url:"contact-us" },
        
    ]
    const group = "GROUP Z"
    return(
        <header className=" flex justify-evenly  sm:justify-center  mb-12 w-full top-0 p-3 sm:p-5  border-1px-solid fixed bg-orange-50 gap-6 sm:rounded-sm items-center shadow-sm  ">
            <div className=" flex sm:w-[10%] justify-center ">
            <a href="/" className="active:text-purple-300">
            <h2 className=" text-xl font-bold  underline"> {group}  </h2>
            </a>
            </div>
            <div className="sm:hidden" onClick={()=>{
                setHamburgerMenu(!hamburgerMenu)
            }} >
                {/* <Bars3CenterLeftIcon className="w-10 h-10" /> */}
                <h2>HOME</h2>
            </div>
            <nav className=" w-[50%] justify-evenly hidden   sm:flex j	">
                { routes.map((route, index) =>(
                    <Link to={route.url}>
                    <li className=" list-none hover:text-purple-500	 " key={index}>
                    <a className=" active:text-blue-500" href="">
                    {route.name}
                    </a>
                    </li>
                    </Link>
                ))}
                
            </nav>
            {hamburgerMenu ? <nav className="absolute w-full top-3 h-[100vh]  bg-inherit text-black sm:hidden">
                    <div className=" flex justify-evenly p-3 shadow-sm">
                    <h2 className=" text-xl font-bold w-1/5 underline"> LOGO </h2>
                    <h2 className="text-xl text-bold text-red-800" 
                        onClick={()=>{
                         setHamburgerMenu(!hamburgerMenu)
                          }}> X </h2>
                    </div>
                    { routes.map((route, index) =>(
                        <Link to={route.url}>
                    <li className=" text-center text-[1.4rem] my-6 p-2 list-none hover:text-purple-500 justify-center	 " key={index}>
                    <a className=" active:text-blue-500 w-full" href="">
                    {route.name}
                </a>
                    </li>
                    </Link>
                ))}
                </nav>: ""}
        </header>
    )
}