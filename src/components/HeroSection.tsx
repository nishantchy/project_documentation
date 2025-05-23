import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function HeroSection({
  title,
  subtitle,
  image,
}: HeroSectionProps) {
  return (
    <section className="flex flex-col items-center text-center mb-12">
      <div className="w-full flex justify-center mb-6">
        <Image
          src={image}
          alt="Project Cover"
          width={800}
          height={320}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold mb-2 text-gray-900">{title}</h1>
      <p className="text-lg text-gray-600 max-w-2xl">{subtitle}</p>
    </section>
  );
}
