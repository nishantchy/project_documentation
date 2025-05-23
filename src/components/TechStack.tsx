import Image from "next/image";

const techs = [
  { name: "Next.js 14", icon: "/next.svg" },
  { name: "Tailwind CSS", icon: "/tailwind.svg" },
  { name: "MongoDB", icon: "/mongodb.svg" },
  { name: "Cloudinary", icon: "/cloudinary.svg" },
  { name: "GitHub Actions", icon: "/github-actions.svg" },
  { name: "Vercel", icon: "/vercel.svg" },
];

export default function TechStack() {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
      <ul className="flex flex-wrap gap-4">
        {techs.map((tech) => (
          <li
            key={tech.name}
            className="flex items-center bg-gray-100 rounded px-3 py-2 text-gray-700"
          >
            <div className="w-6 h-6 mr-2 relative">
              <Image
                src={tech.icon}
                alt={tech.name}
                fill
                className="object-contain"
              />
            </div>
            {tech.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
