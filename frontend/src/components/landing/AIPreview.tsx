import { Sparkles } from "lucide-react";

export default function AIPreview() {
  return (
    <section
      id="ai"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 p-10">

        <div className="flex items-center gap-3">

          <Sparkles
            className="text-emerald-400"
            size={32}
          />

          <h2 className="text-3xl font-bold">
            Monthly AI Review
          </h2>

        </div>

        <div className="mt-8 rounded-2xl bg-black/20 p-8">

          <p className="leading-8 text-[var(--muted)]">

            Hello Shyam 👋

            <br /><br />

            This month you spent ₹31,420.

            <br />

            Food expenses increased by 12%.

            <br />

            Transport expenses decreased by 8%.

            <br />

            You successfully saved ₹9,800.

            <br />

            You are now 64% towards your Laptop Goal.

            <br />

            Your Financial Health Score is

            <span className="font-bold text-emerald-400">
              {" "}91 / 100
            </span>

          </p>

        </div>

      </div>
    </section>
  );
}