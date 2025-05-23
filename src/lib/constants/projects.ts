export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  githubLink: string;
  image: string;
  technologies: string[];
  deployedUrl: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Baburam Foundation Information System",
    slug: "baburam-project-setup",
    description:
      "A modern Next.js web application with robust DevOps implementation featuring CI/CD pipeline with GitHub Actions, secure environment management, and zero-downtime deployment on Vercel.",
    githubLink: "https://github.com/nishantchy/Internship",
    image: "/projects/baburam-project-setup/cover.png",
    technologies: [
      "GitHub Actions",
      "Vercel",
      "Next.js",
      "MongoDB",
      "Cloudinary",
    ],
    deployedUrl: "https://baburam-foundation.vercel.app/",
  },
];
