import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  async function handleLogin(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      await login({
        email,
        password,
      });

      navigate("/dashboard");

    } catch {

      alert("Login failed");

    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#090d17]">

      <form
        onSubmit={handleLogin}
        className="w-[420px] rounded-2xl bg-[#121826] p-8"
      >

        <h1 className="mb-8 text-center text-3xl font-bold text-white">
          Login
        </h1>

        <input
          className="mb-4 w-full rounded-lg border border-gray-700 bg-transparent p-3 text-white"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          className="mb-6 w-full rounded-lg border border-gray-700 bg-transparent p-3 text-white"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          className="w-full rounded-lg bg-emerald-500 py-3 font-semibold text-black"
        >
          Login
        </button>

      </form>

    </div>
  );
}