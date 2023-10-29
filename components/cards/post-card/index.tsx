import * as React from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Post } from "contentlayer/generated";
import Link from "next/link";

function FeaturedPostCard({ title, description, postImage, slug }: Post) {
    return (
        <Card className="w-full flex flex-col p-6">
            <div className="flex flex-row flex-wrap justify-center items-stretch space-y-4 sm:space-y-0">
                <div className="w-full sm:w-1/3 flex justify-center">
                    <Image
                        alt="Davidson Decoded logo"
                        src={postImage}
                        width={330}
                        height={220}
                        className="rounded-xl m-0"
                    />
                </div>
                <div className="w-full sm:w-2/3 sm:pl-4 flex flex-col">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription
                        style={{ marginTop: "0.75rem" }}
                        className="grow m-0"
                    >
                        {description}
                    </CardDescription>
                    <CardFooter className="flex justify-between p-0">
                        <Link href={slug}>
                            <Button variant="outline" className="mt-4">
                                View Project
                            </Button>
                        </Link>
                    </CardFooter>
                </div>
            </div>
        </Card>
    );
}

/**
 * In progress
 * @param param0
 * @returns
 */
function BasePostCard({ title, description, postImage, slug }: Post) {
    return (
        <Card className="max-w-[350px] h-full flex flex-col">
            <CardHeader className="grow">
                <Image
                    alt="Davidson Decoded logo"
                    src={postImage}
                    width={330}
                    height={220}
                    className="rounded-xl mt-0 mb-2"
                />
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
                <Link href={slug}>
                    <Button variant="outline">View Project</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}

export default function PostCard({
    post,
    variant,
}: {
    post: Post;
    variant: "featured" | "base";
}) {
    return variant === "featured" ? (
        <FeaturedPostCard {...post} />
    ) : (
        <BasePostCard {...post} />
    );
}
