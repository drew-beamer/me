import Image from "next/image";
import Link from "next/link";
import { Button1 } from "./buttons";

export default function ProjectCard({
  img,
  alt,
  text,
  title,
  categories,
  url,
}: {
  img: string;
  alt: string;
  text: string;
  title: string;
  categories: string;
  url: string;
}) {
  return (
    <div className="mx-auto max-w-[320px] rounded-xl bg-neutral-800">
      <Image
        className="rounded-t-xl"
        width={720}
        height={480}
        src={img}
        alt={alt}
      />
      <div className="mb-4 px-6 pt-4">
        <Link href={url}>
          <div className="text-xl font-bold hover:underline">{title}</div>
        </Link>
        <div className="mb-2">
          {categories.split(",", 3).map((cat, index) => (
            <span key={cat}>
              {cat + (index !== categories.split(",", 3).length - 1 ? "," : "")}{" "}
            </span>
          ))}
        </div>
        <p>{text}</p>
      </div>
      <div className="px-6 pb-6">
        <Link href={url}>
          <Button1>Learn More</Button1>
        </Link>
      </div>
    </div>
  );
}
