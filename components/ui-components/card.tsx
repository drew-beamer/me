import Image from "next/image"


export default function Card({ img, alt, text, title, categories }: { img: string, alt: string, text: string, title: string, categories: string }) {
    return <div className="sm:mx-0 w-full rounded-xl bg-neutral-800">
        <Image className="rounded-t-xl" width={720} height={480} src={img} alt={alt} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p>
                {text}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            {categories.split(',', 3).map((cat) => (
                <span className="inline-block bg-neutral-600 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#{cat}</span>
            ))}
            
        </div>
    </div>
}