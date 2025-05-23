export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  githubLink: string;
  image: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Kubernetes Cluster Setup",
    slug: "kubernetes-cluster-setup",
    description:
      "A comprehensive guide for setting up and managing a production-grade Kubernetes cluster with best practices.",
    githubLink: "https://github.com/yourusername/kubernetes-cluster-setup",
    image: "/projects/kubernetes-cluster/cover.png",
    technologies: ["Kubernetes", "Docker", "Terraform", "AWS"],
  },
];
