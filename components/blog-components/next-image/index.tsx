import Image from "next/image";

const generatePlaceholder = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect width="${w}" height="${h}" fill="#333" />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const NextImage = (props) => {
  return (
    <div className="blog-post-image">
      <Image
        src={props.src}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          generatePlaceholder(720, 480),
        )}`}
        alt={props.alt}
        {...props}
      />
    </div>
  );
};

export default NextImage;
