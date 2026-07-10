import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">

      <div className="rounded-3xl bg-emerald-500 p-12 text-center text-black">

        <h2 className="text-4xl font-bold">
          Ready to Take Control
          <br />
          of Your Finances?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg">
          Join GoalWise today and start building smarter
          financial habits with AI-powered insights.
        </p>

        <Link
          to="/register"
          className="mx-auto mt-10 flex w-fit items-center gap-2 rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
        >
          Get Started
          <ArrowRight size={20} />
        </Link>

      </div>

    </section>
  );
}