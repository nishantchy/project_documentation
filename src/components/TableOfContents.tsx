const tocItems = [
  { id: "project-overview", label: "Project Overview" },
  { id: "development-setup", label: "Development Setup" },
  { id: "devops-implementation", label: "DevOps Implementation" },
  { id: "deployment-process", label: "Deployment Process" },
  { id: "environment-configuration", label: "Environment Configuration" },
  { id: "monitoring-and-maintenance", label: "Monitoring and Maintenance" },
  { id: "architecture", label: "Project Architecture" },
];

export default function TableOfContents() {
  return (
    <div className="my-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
      <nav>
        <ol className="list-decimal list-inside space-y-2">
          {tocItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
