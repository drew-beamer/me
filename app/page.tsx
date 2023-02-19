'use client';
import Image from 'next/image';

import { GithubIcon, InstagramIcon } from '../components/icons';
import { useEffect, useState } from 'react';


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

export default function Home() {

    const goalText = "DREW BEAMER"
    const [headlineText, setHeadlineText] = useState("DREW BEAMER");

    function generateRandomString(length: number): string {
        const RANDOM_LETTERS = "1234567890!#$%^&*";
        let randomString = ""
        for (let i = 0; i < length; i++) {
            randomString += RANDOM_LETTERS.charAt(Math.floor(RANDOM_LETTERS.length * Math.random()))
        }
        return randomString
    }

    useEffect(() => {
        let timesRun = 0;
        const interval = setInterval(() => {
            if (timesRun === goalText.length + 1) {
                clearInterval(interval);
            } else {
                const newString = goalText.substring(0, timesRun) + generateRandomString(goalText.length - timesRun);
                setHeadlineText(newString);
            }
            timesRun += 1;
        }, 75)
    }, [])



    return <>
        <section>
            <div className='bg-raisin-black'>
                <h1><span className="text-green-400">{headlineText}</span></h1>
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
                                <a target="_blank" href={data.url} className="flex flex-wrap hover:underline my-3">{data.component}<span className="ml-3">{data.text}</span></a>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
            <div className="mt-6">
                <p>I'm passionate about creating <b>data-driven</b>, minimalist web applications, and enjoy working with <b>React/Next.js</b> and <b>Python</b> On this website, you will find a showcase of some of my previous work, as well as a blog where I write about various interests of mine. If you have any questions or would like to potentially collaborate on a project, feel free to get in touch.</p>
            </div>
        </section>
    </>
}