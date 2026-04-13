import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export default function HomePage({ darkMode, toggleTheme }) {
  return (
    <div
      className={
        darkMode
          ? "min-h-screen flex flex-col bg-slate-900 p-6"
          : "min-h-screen flex flex-col bg-slate-100 p-6"
      }
    >
      <div className="flex-1 max-w-5xl mx-auto w-full">
        
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

        <div className="text-center mt-16">
          <h1
            className={
              darkMode
                ? "text-5xl font-bold text-white mb-6"
                : "text-5xl font-bold text-slate-800 mb-6"
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
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition">
              Get Started
            </button>
          </Link>
        </div>

      </div>

      {/* Footer should be outside the centered container */}
      <Footer darkMode={darkMode} />
    </div>
  );
}