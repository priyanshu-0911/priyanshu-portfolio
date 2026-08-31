import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="text-sm text-text-muted">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}