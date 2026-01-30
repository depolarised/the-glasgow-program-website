import Link from "next/link";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center">
      <div className="section-container text-center py-20">
        <h1 className="text-6xl font-bold text-cyan">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-text">Page Not Found</h2>
        <p className="mt-4 text-text-muted max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
