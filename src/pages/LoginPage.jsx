import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === "rishab" && pass === "13112005") {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 flex items-center justify-center">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-white/50">
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-6">
          Welcome Back
        </h1>
        <p className="text-center text-slate-600 mb-8">
          Please sign in to your account
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              ID
            </label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition text-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition text-lg"
              required
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center font-medium">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-2xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
