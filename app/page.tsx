
import Image from 'next/image';
import { GithubIcon, InstagramIcon } from '../components/icons';
import ScrambleText from 'components/misc/scrambleText';
import { motion } from "framer-motion";
import PageWrapper from 'components/ui-components/pageWrapper';

const quickLinkData = [
    {
        component: <GithubIcon size="24" />,
        url: "https://github.com/drew-beamer",
        text: "see my code"
    },
    {
        component: <InstagramIcon size="24" />,
        url: "https://www.instagram.com/crazed4birds/",
        text: "check out my photography"
    },
]


export const metadata = {
    title: "Drew Beamer | Student, Web Developer, Birder",
    description: "Drew is a computer science student and web developer who loves designing minimalist, data-driven web applications. This site acts as his project portfolio and blog.",
    openGraph: {
        title: "Drew Beamer - Student, Web Developer, Birder",
        description: "Drew is a web developer and computer science student at Davidson College. This is his portfolio and blog site."
    }
}

export default function Home() {

    return <PageWrapper>
        <section>
            <div>
                <ScrambleText text="DREW BEAMER" />
                <p>Hi there, I'm Drew. I'm a computer science student at Davidson College, pursuing a career in software engineering.</p>
            </div>
            <div className='w-full flex flex-wrap items-center mt-6'>
                <div className='h-24 w-24 relative flex mr-6 my-1.5 item'>
                    <Image alt="portrait of author at beach" className='rounded-full m-0 w-full' priority src="/images/profile.png" height={96} width={96} />
                </div>
                <div className='relative flex w-fit sm:m-0 leading-tight'>
                    <ul className="list-none">
                        {quickLinkData.map((data, index) => {
                            return <li key={index}>
                                <a target="_blank" href={data.url} className="flex flex-wrap hover:underline my-3 font-normal text-raisin-black dark:text-floral-white">{data.component}<span className="ml-3">{data.text}</span></a>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
            <div className="mt-6">
                <p>I'm passionate about creating <b>data-driven</b>, minimalist web applications, and enjoy working with <b>React/Next.js</b> and <b>Python</b> On this website, you will find a showcase of some of my previous work, as well as a blog where I write about various interests of mine. If you have any questions or would like to potentially collaborate on a project, feel free to get in touch.</p>
            </div>
        </section>
    </PageWrapper>
}