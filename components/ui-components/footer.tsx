import Link from "next/link";
import { GithubIcon, InstagramIcon } from "../icons";

function FooterLink({ to, children }) {
    return <Link href={to} className=" hover:text-green-400 hover:underline transition-colors">{children}</Link>
}

function FooterList({ children }) {
    return <ul className="list-none">
        {children}
    </ul>
}

export default function Footer() {
    return <footer className="p-4 w-screen sm:p-6 bg-neutral-800 flex justify-center">
        <div className="w-[100vw] max-w-[720px] flex items-start flex-wrap p-4 mx-auto">
            <div className="flex-grow">
                <h2>{"<db>"}</h2>
            </div>
            <div className="columns-3 gap-4 break-after-avoid">
                <div className="inline-block">
                    <h3 className="text-green-400">Home</h3>
                    <FooterList>
                        <li><FooterLink to="/">Home</FooterLink></li>
                        <li><FooterLink to="/projects">Projects</FooterLink></li>
                        <li><FooterLink to="/posts">Posts</FooterLink></li>
                    </FooterList>
                </div>
                <div>
                    <h3 className="text-green-400">About</h3>
                    <FooterList>
                        <li><FooterLink to="/about">About</FooterLink></li>
                        <li><FooterLink to="/contact">Contact</FooterLink></li>
                    </FooterList>
                </div>
                <div>
                    <h3 className="text-green-400">Legal</h3>
                    <FooterList>
                        <li><FooterLink to="/legal/privacy">Privacy</FooterLink></li>
                    </FooterList>
                </div>
            </div>
            <hr className="w-full my-8 border-neutral-600" />
            <div className="w-full flex justify-end">
                {[<InstagramIcon size={18} />, <GithubIcon size={18} />].map((ico) => {
                    return <div className="ml-2 hover:fill-green-400 hover:cursor-pointer">
                        {ico}
                    </div>
                })}
            </div>
        </div>
    </footer >


}