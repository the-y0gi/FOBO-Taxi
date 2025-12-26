"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function DriverLoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/driver/dashboard')
    console.log("Driver Login:", email, password);
  };

  return (
    <div className="bg-white backdrop-blur-sm w-[430px] rounded-xl shadow-2xl p-10">
      <h2 className="text-2xl font-semibold text-center mb-2">Login</h2>
      <p className="text-center text-gray-500 mb-6">
        Enter your details to continue your account.
      </p>

      <form onSubmit={handleLogin} className="flex flex-col gap-4">

        {/* Email Field */}
        <div>
          <label className="text-sm font-medium">Email/ Mobile number</label>
          <input
            type="text"
            placeholder="Enter your email/ mobile number"
            className="w-full mt-1 px-3 py-3 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full mt-1 px-3 py-3 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-center my-2">
          <div className="w-1/3 border-t"></div>
          <span className="mx-2 text-gray-500 text-sm">or</span>
          <div className="w-1/3 border-t"></div>
        </div>

        {/* Google Button */}
        <button
          type="button"
          className="flex items-center justify-center gap-3 border rounded-lg py-2"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5" />
          Continue with Google account
        </button>

        {/* Main Login */}
        <button
          type="submit"
          className="mt-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white py-3 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}
