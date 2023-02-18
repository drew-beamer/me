import Link from 'next/link';
import Image from 'next/image';
import { Button1 } from './ui-components/buttons';
import Date from './date';

export default function BlogFeed({ postData }) {

    const url = `/posts/${url}`

    return <div className="mt-4 flex flex-wrap">
        {postData.map(({ id, date, title, postImage, body: { raw }, url }, index) => (<div key={title} className="w-full">
            <div className="flex flex-wrap">
                <div className="w-full h-auto sm:w-44 sm:h-32 relative mr-5 mb-2">
                    <Link href={url}><Image priority={index < 4} alt="decorative thumbnail" src={postImage} fill className="rounded-md" /></Link>
                </div>
                <div className="min-w-6/12 flex-grow">
                    <Link href={url}><h3 className="hover:underline">{title}</h3></Link>
                    <p><Date dateString={date} /> {` | ${Math.round(raw.split(" ").length / 238)} minute read`}</p>
                    <Button1 href={url} internal>Read</Button1>
                </div>
            </div>
            <hr className=" my-6 bg-neutral-800 border-0 h-0.5" />
        </div>
        ))}
    </div>
}