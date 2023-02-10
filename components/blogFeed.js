import Link from 'next/link';
import Image from 'next/image';

export default function BlogFeed({ postData }) {
    return <div className="mt-4 flex flex-wrap">
        {postData.map(({ id, date, title, readTime, postImage }) => (<div key={title} className="w-full">
            <div className="flex flex-wrap">
                <div className="w-full h-auto sm:w-44 sm:h-32 relative mr-5 mb-2">
                    <Link href={`/posts/${id}`}><Image src={postImage} fill className="rounded-md" /></Link>
                </div>
                <div className="min-w-6/12 flex-grow">
                    <Link href={`/posts/${id}`}><h3 className="hover:underline">{title}</h3></Link>
                    <p>{`${date} | ${Math.round(readTime)} minute read`}</p>
                    <Link href={`/posts/${id}`}><button className="inline-block mt-3 px-6 py-1.5 bg-neutral-800 hover:text-neutral-800 text-floral-white font-bold text-sm leading-tight rounded-md hover:bg-green-400 hover:shadow-lg focus:bg-green-400 focus:shadow-lg focus:outline-green-400 focus:ring-0 active:bg-green-400 transition duration-150 ease-in-out">Read</button></Link>
                </div>


            </div>
            <hr className=" my-6 bg-neutral-800 border-0 h-0.5" />
        </div>
        ))}
    </div>
}