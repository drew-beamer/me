import Link from 'next/link';
import Image from 'next/image';
import { Button1 } from './ui-components/buttons';
import Date from './date';

export default function BlogFeed({ postData }) {

    return <div className="mt-4 flex flex-wrap w-full">
        {postData.map(({ date, title, postImage, body: { raw }, slug, description }, index) => {
            const pageUrl = `${slug}`
            return <div key={title} className="w-full grid grid-cols-3 sm:grid-cols-6 md:grid-cols-3 gap-6">
                <div className="aspect-square sm:col-span-2 md:col-span-1 relative max-h-44 sm:block hidden">
                    <Link href={pageUrl}><Image priority={index < 4} alt="decorative thumbnail" src={postImage} fill className="rounded-md object-cover" /></Link>
                </div>
                <div className="col-span-3 sm:col-span-4 md:col-span-2 text-sm">
                    <Link href={pageUrl}><h3 className="hover:underline">{title}</h3></Link>
                    <span>{description}</span>
                    <br/>
                    <span className=' text-neutral-400'><Date dateString={date} /> {` | ${Math.round(raw.split(" ").length / 238)} minute read`}</span>
                    <div className='mt-2'>
                        <Link href={pageUrl}><Button1>Read Post</Button1></Link>
                    </div>
                </div>
                <hr className=" my-6 bg-neutral-800 border-0 h-0.5 col-span-full" />
            </div>
        })}
    </div>
}