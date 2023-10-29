import Link from "next/link";
import React from "react";

interface LinkWrapperProps {
    target?: string;
    href: string;
    children: React.ReactNode;
}

function LinkWrapper(props: LinkWrapperProps) {
    return (
        <Link href={props.href} target={props.target || "_self"}>
            {props.children}
        </Link>
    );
}

export default LinkWrapper;
