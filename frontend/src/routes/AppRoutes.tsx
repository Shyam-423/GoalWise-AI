import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/Landing/LandingPage";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";

import DashboardLayout from "../layouts/DashboardLayout";

import DashboardPage from "../pages/Dashboard/DashboardPage";
import ExpensePage from "../pages/Expense/ExpensePage";
import GoalPage from "../pages/Goal/GoalPage"

import ProfilePage from "../pages/Profile/ProfilePage";
import ReviewPage from "../pages/Review/ReviewPage";



export default function AppRoutes() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    

      {/* Protected Layout */}
      <Route element={<DashboardLayout/>}>

        <Route path="/dashboard" element={<DashboardPage />} />

        <Route path="/expenses" element={<ExpensePage />} />

        <Route path="/goals" element={<GoalPage />} />

        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/review" element={<ReviewPage />} />

        <Route path="/profile" element={<ProfilePage />} />

        
  

      </Route>

    </Routes>
  );
}