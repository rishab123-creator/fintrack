import { Link } from "react-router-dom";
import logo from "../assets/Screenshot_2026-04-18_121025-removebg-preview.png";

export default function Navbar({ darkMode, toggleTheme }) {
  return (
    <nav
      className={
        darkMode
          ? "w-full bg-slate-800 text-white shadow-sm mb-6 rounded-2xl"
          : "w-full bg-white text-slate-800 shadow-sm mb-6 rounded-2xl"
      }
    >
      <div className="max-w-full mx-auto w-full px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="FinTrack logo"
            className="h-14 w-auto object-contain filter brightness-90 contrast-110"
          />
          <span
            className={
              darkMode
                ? "text-emerald-200 text-xl font-serif italic tracking-wide"
                : "text-emerald-700 text-xl font-serif italic tracking-wide"
            }
          >
            FinTrack
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 items-center">
          <Link to="/" className="hover:text-blue-500 font-medium">
            Home
          </Link>

          <Link to="/dashboard" className="hover:text-blue-500 font-medium">
            Dashboard
          </Link>

          <Link to="/transactions" className="hover:text-blue-500 font-medium">
            Transactions
          </Link>

          <Link to="/stats" className="hover:text-blue-500 font-medium">
            Stats
          </Link>

          <Link to="/contact" className="hover:text-blue-500 font-medium">
            Contact
          </Link>

          <button
            onClick={toggleTheme}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl font-semibold transition"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}