'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from "framer-motion";

const buttonData = {
    "/": {
        "name": "Home",
        "x": 0,
        "width": '67.781px'
    },
    "/about": {
        "name": "About",
        "x": 67.781,
        "width": "69.2px"
    },
    "/projects": {
        "name": "Projects",
        "x": 136.984,
        "width": "87.570px"
    },
    "/posts": {
        "name": "Posts",
        "x": 224.554,
        "width": "65.414px"
    }
}

export default function Navbar() {
    let pathName = usePathname();
    if (pathName.includes("/posts/")) {
        pathName = "/posts";
    } else if (pathName.includes("/projects/")) {
        pathName = "/projects";
    }
    return <AnimatePresence>
        <nav className="w-full pt-6 sm:pt-3 fixed bg-neutral-900 opacity-[99%] z-50">
            <div className="flex items-center justify-center sm:justify-start h-full flex-wrap px-5">
                <div className="grow flex justify-center w-full sm:w-auto sm:justify-start">
                    <Link href="/"><h2 className="m-0 hover:cursor-pointer text-floral-white no-underline">{"<db>"}</h2></Link>
                </div>
                <div className="flex flex-row items-start relative pb-0 fade">
                    <div className="flex relative w-[290px] flex-row items-center space-x-0">
                        {buttonData[pathName] ? <div
                            style={{
                                width: buttonData[pathName].width,
                                transform: `translateX(${buttonData[pathName].x}px)`,
                                transition: 'ease 0.45s'
                            }}
                            className={`absolute h-[30px] bg-neutral-800 z-[-1] rounded-md left-0`}
                        /> : null}
                        {Object.entries(buttonData).map(([path, { name, width }]) => {
                            const isActive = pathName === path;
                            return <div key={path} style={{ width: width }} className={`rounded-md py-[10px] px-[10px] text-base text-center`}>
                                <Link className={`${isActive ? " w-full text-green-400" : "text-floral-white"} font-medium hover:no-underline`} href={path}> {name} </Link>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </nav>
    </AnimatePresence >
}
