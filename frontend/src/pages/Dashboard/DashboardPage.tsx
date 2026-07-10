import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { getDashboard } from "../../api/dashboard.api";
import ProfileModalSetup from "../../components/profile/ProfileModalSetup";
import ExpensePieChart from "../../components/dashboard/ExpensePieChart";
import BudgetCard from "../../components/dashboard/BudgetCard";
import GoalProgress from "../../components/dashboard/GoalProgress";
import AIInsights from "../../components/dashboard/AIInsights";

import {
  getProfileStatus,
  setupProfile,
} from "../../api/profile.api";


export default function DashboardPage() {
  const navigate = useNavigate();

const { user, logout } = useAuth();
const [showSetup, setShowSetup] = useState(false);

const [dashboard, setDashboard] = useState<any>(null);

useEffect(() => {
  initialize();
}, []);

async function initialize() {

  await loadDashboard();

  try {

    const status = await getProfileStatus();

    if (!status.onboardingCompleted) {
      setShowSetup(true);
    }

  } catch (err) {
    console.log(err);
  }

}


const loadDashboard = async () => {
  try {
    const res = await getDashboard();

    console.log("Dashboard Response:", res);

    setDashboard(res.data);
  } catch (err) {
    console.log(err);
  }
} ;


  async function handleLogout() {
    await logout();
    navigate("/");
  }
  
  async function handleProfileSetup(data: any) {

  try {

    await setupProfile({
      ...data,
      monthlySalary: Number(data.monthlySalary),
      monthlyBudget: Number(data.monthlyBudget),
      monthlySavingsTarget: Number(data.monthlySavingsTarget),
      salaryCreditDay: Number(data.salaryCreditDay),
    });

    setShowSetup(false);

    loadDashboard();

  } catch (err) {

    console.log(err);

    alert("Failed to save profile");

  }

}


  return (

    <div className="min-h-screen bg-[#090d17] text-white p-8">

      <div className="flex items-center justify-between mb-10">

        <div>
          <h1 className="text-4xl font-bold">
            Welcome 👋
          </h1>

          <p className="mt-2 text-gray-400">
            {user?.fullName}
          </p>

          <p className="text-gray-500">
            {user?.email}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="rounded-lg bg-red-500 px-5 py-2 font-semibold"
        >
          Logout
        </button>

      </div>

      <div className="grid grid-cols-3 gap-6">

        <div className="rounded-xl bg-[#121826] p-6">
          <h2 className="text-xl font-semibold">
            Total Expenses
          </h2>

          <p className="mt-4 text-3xl font-bold text-emerald-400">
            ₹{dashboard?.totalExpense ?? 0}
          </p>
        </div>

        <div className="rounded-xl bg-[#121826] p-6">
          <h2 className="text-xl font-semibold">
            Savings Goal
          </h2>

          <p className="mt-4 text-3xl font-bold text-blue-400">
            ₹{dashboard?.totalSaved ?? 0}
          </p>
        </div>

        <div className="rounded-xl bg-[#121826] p-6">
          <h2 className="text-xl font-semibold">
            AI Financial Score
          </h2>

          <p className="mt-4 text-3xl font-bold text-yellow-400">
            {dashboard?.financialScore ?? 0}
          </p>
        </div>

      </div>

      <div className="mt-10 grid grid-cols-2 gap-6">

        <ExpensePieChart
            expenses={dashboard?.recentExpenses ?? []}
        />

        <BudgetCard
            budget={dashboard?.profile?.monthlyBudget ?? 0}
            expense={dashboard?.totalExpense ?? 0}
        />

        <GoalProgress
        goals={dashboard?.goals ?? []}
    />

        <AIInsights
        review={dashboard?.latestReview}
    />
            </div>

        <ProfileModalSetup
          open={showSetup}
          onSave={handleProfileSetup}
        />
    </div>
    
    
  );
}