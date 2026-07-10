import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-[#090d17] text-white">

      <aside className="w-64 bg-[#111827] p-6">

        <h1 className="text-2xl font-bold mb-8">
          GoalWise AI
        </h1>

        <div className="flex flex-col gap-4">

          <Link to="/dashboard">🏠 Dashboard</Link>

          <Link to="/expenses">💸 Expenses</Link>

          <Link to="/goals">🎯 Goals</Link>

          <Link to="/profile">👤 Profile</Link>

          <Link to="/review">🤖 AI Review</Link>

        </div>

      </aside>

      <main className="flex-1 p-8">
        <Outlet />
      </main>

    </div>
  );
}