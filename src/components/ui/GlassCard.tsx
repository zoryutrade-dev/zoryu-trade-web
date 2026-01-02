import clsx from "clsx";

export default function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-xl border border-white/10 bg-white/5 backdrop-blur-md",
        className
      )}
    >
      {children}
    </div>
  );
}
