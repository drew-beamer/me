import Link from 'next/link';
import Image from 'next/image';
import { Button2 } from './ui-components/buttons';
import Date from './date';

export default function BlogFeed({ postData }) {

    return <div className="mt-4 flex flex-wrap w-full">
        {postData.map(({ date, title, postImage, body: { raw }, url }, index) => {
            const pageUrl = `${url}`
            return <div key={title} className="w-full">
                <div className="flex flex-wrap w-full">
                    <div className="w-full h-auto sm:w-44 sm:h-32 relative mr-5 mb-2">
                        <Link href={pageUrl}><Image priority={index < 4} alt="decorative thumbnail" src={postImage} fill className="rounded-md" /></Link>
                    </div>
                    <div className="min-w-6/12 flex-grow">
                        <Link href={pageUrl}><h3 className="hover:underline">{title}</h3></Link>
                        <p><Date dateString={date} /> {` | ${Math.round(raw.split(" ").length / 238)} minute read`}</p>
                        <div className='mt-2'>
                            <Link href={pageUrl}><Button2>Read</Button2></Link>
                        </div>
                    </div>
                </div>
                <hr className=" my-6 bg-neutral-800 border-0 h-0.5" />
            </div>
        })}
    </div>
}