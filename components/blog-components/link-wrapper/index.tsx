import Link from "next/link";
import React from "react";

interface LinkWrapperProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: React.ReactNode;
}

function LinkWrapper({ href, children, ...rest }: LinkWrapperProps) {
    return (
        <Link href={href as string} target="_blank" {...rest}>
            {children}
        </Link>
    );
}

export default LinkWrapper;
