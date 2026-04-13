import Form from "../components/TransactionForm";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export default function Dashboard({
  balance,
  income,
  expense,
  addTransaction,
  darkMode,
  toggleTheme,
}) {
  return (
    <div
      className={
        darkMode ? "min-h-screen bg-slate-900 p-6" : "min-h-screen bg-slate-100 p-6"
      }
    >
      <div className="max-w-3xl mx-auto">
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

        <h1
          className={
            darkMode
              ? "text-4xl font-bold text-center text-white mb-8"
              : "text-4xl font-bold text-center text-slate-800 mb-8"
          }
        >
          FinTrack Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className={darkMode ? "bg-slate-800 shadow-md rounded-2xl p-5 text-center" : "bg-white shadow-md rounded-2xl p-5 text-center"}>
            <h2 className={darkMode ? "text-lg font-semibold text-slate-300" : "text-lg font-semibold text-slate-600"}>
              Balance
            </h2>
            <p className="text-2xl font-bold text-blue-500">₹{balance}</p>
          </div>

          <div className={darkMode ? "bg-slate-800 shadow-md rounded-2xl p-5 text-center" : "bg-white shadow-md rounded-2xl p-5 text-center"}>
            <h2 className={darkMode ? "text-lg font-semibold text-slate-300" : "text-lg font-semibold text-slate-600"}>
              Income
            </h2>
            <p className="text-2xl font-bold text-green-500">₹{income}</p>
          </div>

          <div className={darkMode ? "bg-slate-800 shadow-md rounded-2xl p-5 text-center" : "bg-white shadow-md rounded-2xl p-5 text-center"}>
            <h2 className={darkMode ? "text-lg font-semibold text-slate-300" : "text-lg font-semibold text-slate-600"}>
              Expense
            </h2>
            <p className="text-2xl font-bold text-red-500">₹{expense}</p>
          </div>
        </div>

        <Form addTransaction={addTransaction} darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}
