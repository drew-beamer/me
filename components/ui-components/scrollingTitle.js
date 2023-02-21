'use client';

import { useEffect, useRef, useLayoutEffect, useState } from "react";

export default function ScrollingTitle({ children }) {


    const textRef = useRef(null);
    const containerRef = useRef(null)
    const [hovered, setHovered] = useState(false);
    const [right, setRight] = useState(0);



    useEffect(() => {
        console.log(right, textRef.current?.offsetWidth, containerRef.current?.clientWidth)
    }, [])

    useEffect(() => {
        if (hovered) {
            if (right < (textRef.current.offsetWidth - containerRef.current.offsetWidth)) {
                setRight(right + 2)
            }
        } else if (right > 0) {
            setRight(right - 2)
        }
    }, [hovered])

    useEffect(() => {
        if (hovered && right <= 2 + (textRef.current.offsetWidth - containerRef.current.offsetWidth)) {
            setTimeout(() => {
                setRight(right + 2)
            }, 10);
        } else if (!hovered && right > 2) {
            setTimeout(() => {
                setRight(right - 2)
            }, 10);
        }
    }, [right])

    return <div ref={containerRef} className="relative overflow-clip w-full hidden sm:inline-block">
        <h1 onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} ref={textRef} style={{ right: right }} className="marquee hidden sm:inline-block whitespace-nowrap ">{children}</h1>
    </div>
}