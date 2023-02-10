import Link from "next/link"
import { useRouter } from "next/router";
import { MenuIcon } from "./icons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const buttonData = {
    "/": {
        "name": "home",
        "x": 0,
        "width": '59.79px'
    },
    "/about": {
        "name": "about",
        "x": 59.79,
        "width": "61.38px"
    },
    "/projects": {
        "name": "projects",
        "x": 120.38,
        "width": "77.63px"
    },
    "/posts": {
        "name": "posts",
        "x": 198.01,
        "width": "57.68px"
    }
}

const itemVariants = {
    closed: {
        opacity: 0
    },
    open: { opacity: 1 }
};

export default function Navbar() {


    const router = useRouter();

    const pathName = router.asPath;
    useEffect(() => {
        console.log(buttonData[pathName])
    }, [pathName])

    
    return <>
        <nav className="w-full h-16">
            <div className="flex items-center px-6 h-full">
                <div className="grow">
                    <Link href="/"><h2 className="m-0 hover:cursor-pointer">{"<db>"}</h2></Link>
                </div>
                <div className="flex flex-row items-start relative overflow-scroll pb-0 fade ">
                    <div className="flex flex-row mb-2 mt-2">
                        {buttonData[pathName] ? <div className="block">
                            <motion.div
                                className="absolute bg-neutral-800 h-[34px] rounded-md z-[-1]"
                                layoutId="test"
                                initial={{ opacity: 0, x: buttonData[pathName].x }}
                                animate={{
                                    opacity: 1,
                                    x: buttonData[pathName].x,
                                    width: buttonData[pathName].width,
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 350,
                                    damping: 30,
                                }}
                            />
                        </div> : null}

                        {Object.entries(buttonData).map(([path, { name }]) => {
                            return <Link href={path} key={path} className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px]">
                                <h4>{name}</h4>
                            </Link>
                        })}
                    </div>
                </div>
            </div>
        </nav>
    </>
}