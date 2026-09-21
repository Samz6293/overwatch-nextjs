"use client";
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { MdClose, MdMenu } from "react-icons/md"
import { navLinks } from "../constants"
import Image from "next/image";

const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black-900/80 shadow-2xl shadow-black/50 text-orange-500
        sm:text-xs lg:text-sm">
            <div className="content-box-s grid grid-cols-2  items-center p-3 
            sm:content-box md:grid-cols-3">
                <button className="text-xl md:hidden"><MdMenu/></button>
                <button className="text-xl hidden"><MdClose/></button>

                <div className="justify-start hidden  
                md:flex">
                    <Image src="/overwatch-logo.png" alt="Overwatch Logo" width={757} height={122} className=" h-[40px]"/>
                </div>

                <ul className="hidden text-white justify-center gap-9 font-apple text-lg
                md:flex">
                    {navLinks.map(link =>
                        <li key={link.id} className="nav-hover"><Link href={link.id}>{link.title}</Link></li>
                    )}
                </ul>

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
        </nav>
    )
}

export default Nav
