import { Navbar } from "@/components/ui/navbar";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/lib/constants/projects";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to My DevOps Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hello! I'm a DevOps engineer passionate about infrastructure
            automation and cloud technologies. This website showcases my
            hands-on projects and their detailed documentation. Here you'll find
            step-by-step guides, architecture decisions, and practical
            implementations of various DevOps tools and practices I've worked
            with.
          </p>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">My Projects</h2>
          <p className="text-muted-foreground mb-8">
            Each project below represents a real-world implementation with
            detailed documentation. Feel free to explore the code,
            documentation, and learn about the technologies and practices I've
            used in each project.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
