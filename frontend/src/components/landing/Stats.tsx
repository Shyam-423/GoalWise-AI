import { Wallet, TrendingUp, Target } from "lucide-react";

const stats = [
  {
    icon: Wallet,
    title: "₹1M+",
    subtitle: "Expenses Managed",
    color: "text-emerald-400",
  },
  {
    icon: TrendingUp,
    title: "95%",
    subtitle: "Better Saving Habits",
    color: "text-blue-400",
  },
  {
    icon: Target,
    title: "1000+",
    subtitle: "Goals Achieved",
    color: "text-orange-400",
  },
];

export default function Stats() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-24 md:grid-cols-3">

      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-gray-800 bg-[var(--card)] p-8 transition duration-300 hover:-translate-y-2 hover:border-emerald-500"
          >
            <Icon className={`mb-4 ${item.color}`} size={34} />

            <h2 className="text-4xl font-bold">
              {item.title}
            </h2>

            <p className="mt-2 text-[var(--muted)]">
              {item.subtitle}
            </p>

          </div>
        );
      })}
    </section>
  );
}