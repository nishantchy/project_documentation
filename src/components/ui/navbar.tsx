import Link from "next/link";
import { Github } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          <Image src="/logo.png" alt="Logo" width={82} height={82} />
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/docs" className="text-sm hover:text-primary">
            Documentation
          </Link>
          <a
            href="https://github.com/nishantchy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-primary"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
