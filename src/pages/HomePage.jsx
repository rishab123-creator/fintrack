import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export default function HomePage({ darkMode, toggleTheme }) {
  return (
    <div
      className={
        darkMode
          ? "min-h-screen flex flex-col bg-slate-950 px-0 overflow-x-hidden"
          : "min-h-screen flex flex-col bg-slate-100 px-0 overflow-x-hidden"
      }
    >
      <div className="relative flex-1 w-full home-hero">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-16 left-10 w-64 h-64 rounded-full bg-emerald-500/20 blur-3xl animate-blob"></div>
          <div className="absolute top-24 right-0 w-56 h-56 rounded-full bg-emerald-400/20 blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-1/3 w-72 h-72 rounded-full bg-slate-700/20 blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

        <div className="relative flex min-h-screen w-full">
          <div className="relative flex-1 w-full px-4 lg:px-6">
            <div className="relative mx-auto max-w-6xl text-center mt-16 px-4 sm:px-0">
          <h1
            className={
              darkMode
                ? "text-5xl font-bold text-white mb-6"
                : "text-5xl font-bold text-slate-900 mb-6"
            }
          >
            Welcome to FinTrack
          </h1>

          <p
            className={
              darkMode
                ? "text-xl text-slate-300 mb-6"
                : "text-xl text-slate-600 mb-6"
            }
          >
            Track your money. Control your spending. Build better habits.
          </p>

          <p
            className={
              darkMode
                ? "text-lg italic text-slate-400 mb-10"
                : "text-lg italic text-slate-500 mb-10"
            }
          >
            “Beware of little expenses; a small leak will sink a great ship.”
          </p>

          <Link to="/login">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-3xl font-semibold text-lg transition shadow-lg shadow-emerald-500/20">
              Get Started
            </button>
          </Link>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left relative z-10">
            <div className={
                darkMode
                  ? "rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl"
                  : "rounded-[28px] border border-slate-200/80 bg-white/90 p-6 shadow-2xl shadow-slate-300/20 backdrop-blur-xl"
              }>
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-emerald-500/15 p-3 text-emerald-500">
                💡
              </div>
              <h2 className={
                  darkMode
                    ? "text-xl font-semibold text-white mb-2"
                    : "text-xl font-semibold text-slate-900 mb-2"
                }>
                Smart insights
              </h2>
              <p className={
                  darkMode
                    ? "text-sm text-slate-300"
                    : "text-sm text-slate-600"
                }>
                See your spending patterns, cash flow, and saving opportunities at a glance.
              </p>
            </div>

            <div className={
                darkMode
                  ? "rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl"
                  : "rounded-[28px] border border-slate-200/80 bg-white/90 p-6 shadow-2xl shadow-slate-300/20 backdrop-blur-xl"
              }>
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-emerald-500/15 p-3 text-emerald-500">
                📊
              </div>
              <h2 className={
                  darkMode
                    ? "text-xl font-semibold text-white mb-2"
                    : "text-xl font-semibold text-slate-900 mb-2"
                }>
                Budget power
              </h2>
              <p className={
                  darkMode
                    ? "text-sm text-slate-300"
                    : "text-sm text-slate-600"
                }>
                Create custom budgets, monitor categories, and stay ahead of overspending.
              </p>
            </div>

            <div className={
                darkMode
                  ? "rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl"
                  : "rounded-[28px] border border-slate-200/80 bg-white/90 p-6 shadow-2xl shadow-slate-300/20 backdrop-blur-xl"
              }>
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-emerald-500/15 p-3 text-emerald-500">
                🔔
              </div>
              <h2 className={
                  darkMode
                    ? "text-xl font-semibold text-white mb-2"
                    : "text-xl font-semibold text-slate-900 mb-2"
                }>
                Instant alerts
              </h2>
              <p className={
                  darkMode
                    ? "text-sm text-slate-300"
                    : "text-sm text-slate-600"
                }>
                Stay notified when bills, goals, or key transactions need your attention.
              </p>
            </div>

            <div className={
                darkMode
                  ? "rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl"
                  : "rounded-[28px] border border-slate-200/80 bg-white/90 p-6 shadow-2xl shadow-slate-300/20 backdrop-blur-xl"
              }>
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-emerald-500/15 p-3 text-emerald-500">
                🔒
              </div>
              <h2 className={
                  darkMode
                    ? "text-xl font-semibold text-white mb-2"
                    : "text-xl font-semibold text-slate-900 mb-2"
                }>
                Secure control
              </h2>
              <p className={
                  darkMode
                    ? "text-sm text-slate-300"
                    : "text-sm text-slate-600"
                }>
                Keep all your financial data safe with modern security and private tracking.
              </p>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>

      {/* Footer should be outside the centered container */}
      <Footer darkMode={darkMode} />
    </div>
  );
}