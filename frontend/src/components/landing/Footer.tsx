export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 md:flex-row">

        <div>

          <h2 className="text-3xl font-bold text-emerald-400">

            GoalWise

          </h2>

          <p className="mt-3 max-w-sm text-[var(--muted)]">

            Spend Smart.

            Save Better.

            Reach Your Goals.

          </p>

        </div>

        <div className="flex gap-10 text-sm text-[var(--muted)]">

          <a href="#features">Features</a>

          <a href="#ai">AI</a>

          <a href="/">Privacy</a>

          <a href="/">Contact</a>

        </div>

      </div>

      <p className="mt-12 text-center text-sm text-gray-500">

        © 2026 GoalWise. All Rights Reserved.

      </p>

    </footer>
  );
}