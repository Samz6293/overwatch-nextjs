"use client";
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { MdClose, MdMenu } from "react-icons/md"
import { navLinks } from "../constants"
import Image from "next/image";
import { useEffect, useState } from "react";
import { RiHome2Line } from "react-icons/ri";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if(isOpen) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }
    },[isOpen])
    return (

        // full nav
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black-900/80 shadow-2xl shadow-black/50 text-orange-500
        sm:text-xs lg:text-sm">

            {/* nav content frame */}
            <div className="content-box grid grid-cols-2  items-center py-3  
            md:grid-cols-3">
                
                {/* mobile nav buttons */}
                <div className="flex justify-start items-center gap-2
                md:hidden">
                    <Link href={"/"}><RiHome2Line className="text-2xl" /></Link>

                    {isOpen ?
                    <button onClick={() => setIsOpen(!isOpen)} className="text-2xl"><MdClose/></button>
                    :
                    <button onClick={() => setIsOpen(!isOpen)} className="text-2xl"><MdMenu/></button>
                     }
                </div>

                {/* logo image */}
                <div className="hidden justify-start   
                md:flex">
                    <Link className="w-fit" href="/">
                    <Image src="/overwatch-logo-transparent.png" alt="Overwatch Logo" width={757} height={122} className="h-6 w-auto" priority/>
                    </Link>
                </div>

                {/* links */}
                <ul className="hidden text-white justify-center gap-9 font-apple text-lg
                md:flex">
                    {navLinks.map(link =>
                        <li key={link.id} className="nav-hover"><Link href={link.id}>{link.title}</Link></li>
                    )}
                </ul>

                {/* source button wrapper */}
                <div className="flex justify-end">
                    <Link href="https://github.com/Samz6293/overwatch-nextjs" target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold
                    bg-white/5 border border-white/10 text-gray-200
                    hover:bg-orange-600 hover:text-white hover:border-orange-500 hover:shadow-[0_0_15px_rgba(220,38,38,0.4)]
                        active:scale-95 transition-all duration-200">
                        <FaGithub className="text-2xl" />
                        <span className="text-sm">Source</span>
                    </Link>
                </div>

            </div>
            
            {/* mobile nav dropdown */}
            <div className={`fixed left-0 top-[navbar-height] z-40 w-full h-screen bg-black/95 backdrop-blur-xl
            transition-all duration-300 ease-in-out ${isOpen === false ? "-translate-y-[navbar-height] opacity-0 pointer-events-none":
            "translate-y-0 opacity-100 pointer-events-auto"} 
            md:hidden`}>
                <ul className="flex flex-col text-orange-500 h-dvh justify-start items-center gap-3 font-apple text-lg">
                    {navLinks.map(link =>
                        <li key={link.id} className="w-full text-center text-2xl"><Link onClick={() => setIsOpen(false)} href={link.id}>{link.title}</Link></li>
                    )}
                </ul>
            </div>

        </nav>
    )
}

export default Nav
