import {
  ArrowUpRight,
  Target,
  Wallet,
  Sparkles,
} from "lucide-react";

export default function DashboardMockup() {
  return (
    <div className="relative w-full max-w-lg">

      {/* Glow */}

      <div className="absolute inset-0 rounded-3xl bg-emerald-500/20 blur-3xl" />

      <div className="relative space-y-5 rounded-3xl border border-white/10 bg-[var(--card)] p-6 shadow-2xl">

        {/* Balance */}

        <div className="rounded-2xl bg-emerald-500 p-6 text-black">

          <p className="text-sm font-medium">
            Available Balance
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            ₹42,500
          </h2>

          <div className="mt-3 flex items-center gap-2">

            <ArrowUpRight size={18} />

            <span className="font-semibold">
              +12.4% this month
            </span>

          </div>

        </div>

        {/* Small Cards */}

        <div className="grid grid-cols-2 gap-4">

          <div className="rounded-2xl bg-white/5 p-5">

            <Wallet className="mb-4 text-blue-400" />

            <h3 className="text-2xl font-bold">
              ₹17,250
            </h3>

            <p className="text-sm text-[var(--muted)]">
              Monthly Spending
            </p>

          </div>

          <div className="rounded-2xl bg-white/5 p-5">

            <Target className="mb-4 text-orange-400" />

            <h3 className="text-2xl font-bold">
              64%
            </h3>

            <p className="text-sm text-[var(--muted)]">
              Goal Progress
            </p>

          </div>

        </div>

        {/* AI */}

        <div className="rounded-2xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 p-5">

          <div className="mb-3 flex items-center gap-3">

            <Sparkles className="text-emerald-400" />

            <span className="font-semibold">
              AI Financial Score
            </span>

          </div>

          <h2 className="text-4xl font-bold text-emerald-400">
            91 / 100
          </h2>

        </div>

      </div>

    </div>
  );
}