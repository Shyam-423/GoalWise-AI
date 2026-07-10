import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(11,15,25,0.75)] backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-emerald-400"
        >
          GoalWise
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-gray-300 md:flex">
          <a href="#features" className="hover:text-white transition">
            Features
          </a>

          <a href="#ai" className="hover:text-white transition">
            AI
          </a>

          <a href="#analytics" className="hover:text-white transition">
            Analytics
          </a>

          <a href="#about" className="hover:text-white transition">
            About
          </a>
        </div>

        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="hidden text-gray-300 transition hover:text-white md:block"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-black transition hover:scale-105 hover:bg-emerald-400"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>

        </div>

      </nav>
    </header>
  );
}