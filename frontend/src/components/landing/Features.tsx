import {
  Wallet,
  Target,
  Brain,
  BarChart3,
  Repeat,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Expense Tracking",
    description: "Record and organize every expense with powerful categorization.",
    icon: Wallet,
  },
  {
    title: "Goal-Based Savings",
    description: "Create multiple financial goals and automatically track progress.",
    icon: Target,
  },
  {
    title: "AI Insights",
    description: "Receive personalized financial suggestions every month.",
    icon: Brain,
  },
  {
    title: "Analytics Dashboard",
    description: "Visualize spending patterns using beautiful charts.",
    icon: BarChart3,
  },
  {
    title: "Recurring Expenses",
    description: "Automatically manage subscriptions and monthly bills.",
    icon: Repeat,
  },
  {
    title: "Secure",
    description: "JWT Authentication with encrypted passwords and secure storage.",
    icon: ShieldCheck,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="text-center">

        <p className="text-emerald-400 font-semibold">
          FEATURES
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Everything You Need
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg text-[var(--muted)]">
          GoalWise combines expense tracking, AI recommendations,
          financial planning and savings into one platform.
        </p>

      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="group rounded-2xl border border-gray-800 bg-[var(--card)] p-8 transition duration-300 hover:-translate-y-2 hover:border-emerald-500"
            >
              <div className="mb-6 inline-flex rounded-xl bg-emerald-500/10 p-4">
                <Icon
                  className="text-emerald-400"
                  size={30}
                />
              </div>

              <h3 className="text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-[var(--muted)]">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}