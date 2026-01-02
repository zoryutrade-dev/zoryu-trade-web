import GlassCard from "../components/ui/GlassCard";

export default function Dashboard() {
  return (
    <GlassCard className="p-6">
      <h2 className="text-lg font-medium mb-2">Dashboard</h2>
      <p className="text-sm text-zinc-400">
        System overview and performance snapshot.
      </p>
    </GlassCard>
  );
}
