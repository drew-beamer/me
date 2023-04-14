'use client';
import { TagCloud } from 'react-tagcloud';

interface Tag {
    value: string,
    count: number
}

export default function TagCloudComponent({ tags }: {tags: Tag[]}) {
    const data = tags.map((tag) => {
        return {
            ...tag,
            color: tag.count <= 25 ? "white" : "transparent",
            props: {
                className: tag.count <= 25 ? "font-medium" : "bg-clip-text bg-gradient-to-br from-green-400 to-teal-400 font-medium"
            }
        }
        
    })

    return <TagCloud randomSeed={234234234} shuffle minSize={16} maxSize={36} tags={data}/>
}