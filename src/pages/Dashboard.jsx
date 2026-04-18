import Form from "../components/TransactionForm";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import FinanceNews from "../components/FinanceNews";
import FixedExpenses from "../components/FixedExpenses";

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
        darkMode ? "min-h-screen bg-slate-900 flex flex-col" : "min-h-screen bg-slate-100 flex flex-col"
      }
    >
      {/* Full-width Navbar Container */}
      <div className="w-full pt-6 px-4 sm:px-6 lg:px-8 z-10 relative">
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      </div>

      {/* Main Content Boxed */}
      <div className="flex-1 max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8 mt-2 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8">
          
          {/* Left Column: Finance News */}
          <div className="flex flex-col">
            <FinanceNews darkMode={darkMode} />
          </div>

          {/* Right Column: Transactions & Stats */}
          <div className="flex flex-col space-y-6">
            
            {/* Top Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              <div className={darkMode ? "bg-slate-800 shadow-md rounded-3xl p-5 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-1" : "bg-white shadow-md rounded-3xl p-5 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-1"}>
                <h2 className={darkMode ? "text-sm font-semibold text-slate-400 uppercase tracking-wider" : "text-sm font-semibold text-slate-500 uppercase tracking-wider"}>
                  Balance
                </h2>
                <p className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">₹{balance}</p>
              </div>

              <div className={darkMode ? "bg-slate-800 shadow-md rounded-3xl p-5 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-1" : "bg-white shadow-md rounded-3xl p-5 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-1"}>
                <h2 className={darkMode ? "text-sm font-semibold text-slate-400 uppercase tracking-wider" : "text-sm font-semibold text-slate-500 uppercase tracking-wider"}>
                  Income
                </h2>
                <p className="text-xl sm:text-2xl font-bold text-emerald-500 mt-1">₹{income}</p>
              </div>

              <div className={darkMode ? "bg-slate-800 shadow-md rounded-3xl p-5 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-1" : "bg-white shadow-md rounded-3xl p-5 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-1"}>
                <h2 className={darkMode ? "text-sm font-semibold text-slate-400 uppercase tracking-wider" : "text-sm font-semibold text-slate-500 uppercase tracking-wider"}>
                  Expense
                </h2>
                <p className="text-xl sm:text-2xl font-bold text-rose-500 mt-1">₹{expense}</p>
              </div>
            </div>

            {/* Input Form */}
            <div className="w-full">
              <Form addTransaction={addTransaction} darkMode={darkMode} />
            </div>

            {/* Monthly Fixed Expenses Checklist */}
            <div className="w-full">
              <FixedExpenses darkMode={darkMode} />
            </div>

          </div>
        </div>
      </div>
      
      {/* Push Footer to the bottom using sticky/margin-auto trick inside flex-col container */}
      <div className="mt-auto">
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}
