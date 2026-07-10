import { ArrowRight } from "lucide-react";
import DashboardMockup from "./DashboardMockup";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">

      <div className="grid w-full gap-16 lg:grid-cols-2">

        {/* LEFT */}

        <div className="flex flex-col justify-center">

          <div className="mb-6 w-fit rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-medium text-emerald-400">
            AI Powered Personal Finance
          </div>

          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">

            Spend Smart.

            <br />

            Save Better.

            <br />

            Reach Your Goals.

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--muted)]">

            Track expenses.

            Build savings.

            Manage financial goals.

            Get AI-powered insights every month.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/register"
              className="flex items-center gap-2 rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>

            <button className="rounded-xl border border-gray-700 px-8 py-4 font-semibold hover:border-emerald-500">

              Learn More

            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex items-center justify-center">

          <DashboardMockup />

        </div>

      </div>

    </section>
  );
}