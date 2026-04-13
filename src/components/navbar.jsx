import { Link } from "react-router-dom";

export default function Navbar({ darkMode, toggleTheme }) {
  return (
    <nav
      className={
        darkMode
          ? "bg-slate-800 text-white shadow-md mb-8 rounded-2xl"
          : "bg-white text-slate-800 shadow-md mb-8 rounded-2xl"
      }
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold">FinTrack</h1>

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