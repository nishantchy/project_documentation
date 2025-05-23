interface CodeBlockProps {
  language?: string;
  code: string;
}

export default function CodeBlock({ language, code }: CodeBlockProps) {
  return (
    <div className="my-4">
      <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
        <code className={language ? `language-${language}` : ""}>{code}</code>
      </pre>
    </div>
  );
}
