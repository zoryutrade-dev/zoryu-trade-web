import GlassCard from "../components/ui/GlassCard";

export default function Terminal() {
  return (
    <GlassCard className="p-6">
      <h2 className="text-lg font-medium mb-2">Trading Terminal</h2>
      <p className="text-sm text-zinc-400">
        Market view, execution, and order entry.
      </p>
    </GlassCard>
  );
}
