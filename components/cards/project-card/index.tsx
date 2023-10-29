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
import { Project } from "contentlayer/generated";
import Link from "next/link";

export default function ProjectCard({
    title,
    description,
    projectImage,
    slug,
}: Project) {
    return (
        <Card className="max-w-[350px] h-full flex flex-col">
            <CardHeader className="grow">
                <Image
                    alt="Davidson Decoded logo"
                    src={projectImage}
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
