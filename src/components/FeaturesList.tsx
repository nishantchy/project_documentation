const features = [
  "Internationalization support",
  "Server-side rendering",
  "API routes",
  "Image optimization",
  "Responsive design",
];

export default function FeaturesList() {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">Key Features</h3>
      <ul className="list-none space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-green-500 mr-2">✔️</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
