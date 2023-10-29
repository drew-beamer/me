import React from "react";
import Link from "next/link";
import { GithubIcon, InstagramIcon } from "../icons";

function FooterLink({
    to,
    children,
}: {
    to: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={to}
            className="text-floral-white font-normal transition-colors"
        >
            {children}
        </Link>
    );
}

function FooterList({ children }: { children: React.ReactNode }) {
    return <ul className="list-none">{children}</ul>;
}

export default function Footer() {
    return (
        <footer className="flex w-screen justify-center bg-neutral-800 p-4 sm:p-6">
            <div className="mx-auto flex w-[100vw] max-w-[720px] flex-wrap items-start p-4 ">
                <div className="flex-grow">
                    <h2>{"<db>"}</h2>
                </div>
                <div className="columns-3 break-after-avoid gap-4">
                    <div className="inline-block">
                        <h3 className="text-green-400">Home</h3>
                        <FooterList>
                            <li>
                                <FooterLink to="/">Home</FooterLink>
                            </li>
                            <li>
                                <FooterLink to="/projects">Projects</FooterLink>
                            </li>
                            <li>
                                <FooterLink to="/posts">Posts</FooterLink>
                            </li>
                        </FooterList>
                    </div>
                    <div>
                        <h3 className="text-green-400">About</h3>
                        <FooterList>
                            <li>
                                <FooterLink to="/about">About</FooterLink>
                            </li>
                            <br />
                        </FooterList>
                    </div>
                    <div>
                        <h3 className="text-green-400">Legal</h3>
                        <FooterList>
                            <li>
                                <FooterLink to="/legal/privacy">
                                    Privacy
                                </FooterLink>
                            </li>
                        </FooterList>
                    </div>
                </div>
                <hr className="my-8 w-full border-neutral-600" />
                <div className="flex w-full justify-end">
                    {[
                        <InstagramIcon size={18} />,
                        <GithubIcon size={18} />,
                    ].map(ico => {
                        return (
                            <div className="ml-2 hover:cursor-pointer hover:fill-green-400">
                                {ico}
                            </div>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}
