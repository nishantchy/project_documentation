const steps = [
  "Fork the repository",
  "Create a feature branch",
  "Commit changes",
  "Push to the branch",
  "Create a Pull Request",
];

export default function Contributing() {
  return (
    <section id="contributing" className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Contributing</h2>
      <ol className="list-decimal ml-6 space-y-1 text-gray-700">
        {steps.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
    </section>
  );
}
