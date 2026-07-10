import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

export default function RegisterPage() {

  const navigate = useNavigate();

  const { register } = useAuth();

  const [fullName, setFullName] = useState("");

  const [email,setEmail]=useState("");

  const [password,setPassword]=useState("");

  const [pin, setPin] = useState("");

  async function handleRegister(
    e:React.FormEvent
  ){

    e.preventDefault();

    try{

      await register({
            fullName,
            email,
            password,
            pin,
          });

      navigate("/dashboard");

    }

    catch (err: any) {
  console.log(err.response?.data);
  alert(err.response?.data?.message || "Registration Failed");
}

  }

  return(

    <div className="flex min-h-screen items-center justify-center bg-[#090d17]">

      <form
      onSubmit={handleRegister}
      className="w-[450px] rounded-2xl bg-[#121826] p-8">

        <h1 className="mb-8 text-center text-3xl font-bold text-white">

          Register

        </h1>

        <input

        placeholder="Name"

        className="mb-4 w-full rounded-lg border border-gray-700 bg-transparent p-3 text-white"

        value={fullName}
        onChange={(e)=>setFullName(e.target.value)}

        />

        <input

        placeholder="Email"

        className="mb-4 w-full rounded-lg border border-gray-700 bg-transparent p-3 text-white"

        value={email}

        onChange={(e)=>setEmail(e.target.value)}

        />

        <input

        type="password"

        placeholder="Password"

        className="mb-6 w-full rounded-lg border border-gray-700 bg-transparent p-3 text-white"

        value={password}

        onChange={(e)=>setPassword(e.target.value)}

        />

        <input
          placeholder="4 Digit PIN"
          className="mb-6 w-full rounded-lg border border-gray-700 bg-transparent p-3 text-white"
          value={pin}
          onChange={(e)=>setPin(e.target.value)}
        />

        <button

        className="w-full rounded-lg bg-emerald-500 py-3 font-semibold text-black">

          Create Account

        </button>

      </form>

    </div>

  );

}