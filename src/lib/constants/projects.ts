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
      "A comprehensive guide for setting up and managing a production-grade Kubernetes cluster with best practices.",
    githubLink: "https://github.com/yourusername/kubernetes-cluster-setup",
    image: "/projects/baburam-project-setup/cover.png",
    technologies: ["GitHub Actions", "Vercel"],
    deployedUrl: "https://baburam-foundation.vercel.app/",
  },
];
