import Link from 'next/link';
import Image from 'next/image';
import { Button1 } from './ui-components/buttons';
import Date from './date';

export default function BlogFeed({ postData }) {

    return <div className='mt-4'>
        <h2 className="w-full">Latest post</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-3 list-none w-[85%] mx-auto sm:w-full">
            
            {postData.map(({ date, title, postImage, slug, description, about }, index) => {
                const pageUrl = `${slug}`
                if (index === 0) {
                    return <li key={index} className="col-span-1 sm:col-span-3 bg-neutral-800 rounded-lg sm:p-6 mb-6">
                        <div className='flex flex-wrap'>
                            <div className="relative w-full sm:w-[25%] rounded-lg aspect-square">
                                <Image src={postImage} className="rounded-lg" style={{ objectFit: "cover" }} fill alt={title} />
                            </div>
                            <div className="w-full sm:w-[75%] space-y-1 px-6 py-6 sm:py-0 text-ellipsis overflow-hidden max-h-[248px]">
                                <h4 className="text-green-400 uppercase">{about}</h4>
                                <Link href={pageUrl}><h3 className='hover:text-green-400 transition-colors'>{title}</h3></Link>
                                <Date dateString={date} />
                                <p>{description}</p>
                            </div>
                        </div>
                    </li>
                } else {
                    return <li key={index} className="col-span-1 bg-neutral-800 rounded-lg mb-6">
                    <div className='flex flex-wrap'>
                        <div className="relative w-full  rounded-lg aspect-square">
                            <Image src={postImage} className="rounded-lg" style={{ objectFit: "cover" }} fill alt={title} />
                        </div>
                        <div className="w-full space-y-1 px-6 py-6 max-h-[248px]">
                            <h4 className="text-green-400 uppercase">{about}</h4>
                            <Link href={pageUrl}><h3 className='hover:text-green-400 transition-colors'>{title}</h3></Link>
                            <Date dateString={date} />
                            <p className='line-clamp-4'>{description}</p>
                        </div>
                    </div>
                </li>
                }
            })}
        </ul>
    </div>
}