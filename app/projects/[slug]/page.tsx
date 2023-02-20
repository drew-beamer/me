//'use client';
import { allProjects } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";
//import { useEffect, useRef, useLayoutEffect, useState } from "react";

export async function generateStaticParams() {
    return allProjects.map((post) => {
        if (post.url !== undefined) {
            return {
                slug: post.url.substring(9),
            }
        }
    });
}

const NextImage = (props) => {
    return <div className="rounded-[30px]">
        <Image src={props.src} {...props} className="rounded-[30px] px-4 py-4 relative bottom-4" />
    </div>
}


export default function ProjectPage({ params }) {
    /*
    const ref = useRef(null);
    const post = useRef(null)
    const [hovered, setHovered] = useState(false);
    const [right, setRight] = useState(0);
    */

    /*
    useEffect(() => {
        console.log(right, ref.current?.offsetWidth, post.current?.clientWidth)
    }, [])

    useEffect(() => {
        if (hovered) {
            if (right < (ref.current.offsetWidth - post.current.offsetWidth)) {
                setRight(right + 2)
            }
        } else if (right > 0) {
            setRight(right - 2)
        }
    }, [hovered])

    useEffect(() => {
        if (hovered && right <= 2 + (ref.current.offsetWidth - post.current.offsetWidth)) {
            setTimeout(() => {
                setRight(right + 2)
            }, 10);
        } else if (!hovered && right > 2) {
            setTimeout(() => {
                setRight(right - 2)
            }, 10);
        }
    }, [right])
    */

    const project = allProjects.find((post) => {
        return ("projects/" + params.slug === post.url)
    })


   // console.log(project.body.code)
   // onMouseEnter={() => setHovered(true)}
   // onMouseLeave={() => setHovered(false)}


    const components = {
        Image: NextImage
    }

    const Content = useMDXComponent(project.body.code)
    return (
        <>
            <article  className="blogPost relative sm:overflow-clip w-full">
                <h1 style={{ right: 0 }} className="marquee hidden sm:inline-block whitespace-nowrap ">{project.title}</h1>
                <div className="inline-block sm:hidden w-full overflow-auto">
                    <h1 className="whitespace-nowrap">{project.title}</h1>
                </div>

                <div className="relative">
                    <Content components={{ ...components }} />
                </div>

            </article>
            <div className="hover:underline text-green-400 mb-24"><Link href="/projects">← Return to Projects</Link></div>
        </>
    )
}