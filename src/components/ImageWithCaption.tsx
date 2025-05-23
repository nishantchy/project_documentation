import Image from "next/image";

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption: string;
}

export default function ImageWithCaption({
  src,
  alt,
  caption,
}: ImageWithCaptionProps) {
  return (
    <figure className="my-6 flex flex-col items-center">
      <Image
        src={src}
        alt={alt}
        width={700}
        height={300}
        className="rounded shadow-md object-contain"
      />
      <figcaption className="mt-2 text-sm text-gray-500 text-center">
        {caption}
      </figcaption>
    </figure>
  );
}
