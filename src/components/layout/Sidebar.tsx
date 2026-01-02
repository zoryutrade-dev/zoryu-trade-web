import { Link, useLocation } from "wouter";
import clsx from "clsx";

const nav = [
  { href: "/", label: "Dashboard" },
  { href: "/terminal", label: "Terminal" },
  { href: "/signals", label: "AI Signals" },
];

export default function Sidebar() {
  const [location] = useLocation();

  return (
    <aside className="w-56 border-r border-white/10 bg-zinc-950 p-4">
      <div className="mb-6 text-lg font-semibold">Zoryu</div>
      <nav className="space-y-1">
        {nav.map((n) => (
          <Link key={n.href} href={n.href}>
            <a
              className={clsx(
                "block rounded-md px-3 py-2 text-sm transition",
                location === n.href
                  ? "bg-white/10"
                  : "hover:bg-white/5"
              )}
            >
              {n.label}
            </a>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
