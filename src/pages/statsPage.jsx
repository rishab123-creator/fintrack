import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export default function StatsPage({
  transactions,
  balance,
  income,
  expense,
  darkMode,
  toggleTheme,
}) {
  const highestIncome =
    transactions
      .filter((t) => t.type === "income")
      .reduce((max, t) => (t.amount > max ? t.amount : max), 0) || 0;

  const highestExpense =
    transactions
      .filter((t) => t.type === "expense")
      .reduce((max, t) => (t.amount > max ? t.amount : max), 0) || 0;

  // Category wise expense
  const expenseByCategory = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => {
      const cat = t.category || 'Uncategorized';
      acc[cat] = (acc[cat] || 0) + t.amount;
      return acc;
    }, {});

  // Time based expenses
  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const yearAgo = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);

  const weeklyExpense = transactions
    .filter((t) => t.type === "expense" && new Date(t.date) >= weekAgo)
    .reduce((sum, t) => sum + t.amount, 0);

  const monthlyExpense = transactions
    .filter((t) => t.type === "expense" && new Date(t.date) >= monthAgo)
    .reduce((sum, t) => sum + t.amount, 0);

  const yearlyExpense = transactions
    .filter((t) => t.type === "expense" && new Date(t.date) >= yearAgo)
    .reduce((sum, t) => sum + t.amount, 0);

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
      <div className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-2 pb-12">
        <h1
          className={
            darkMode
              ? "text-4xl font-bold text-center text-white mb-8 mt-4"
              : "text-4xl font-bold text-center text-slate-800 mb-8 mt-4"
          }
        >
          FinTrack Statistics
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          <div className={darkMode ? "bg-slate-800 shadow-md rounded-3xl p-5 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-1" : "bg-white shadow-md rounded-3xl p-5 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-1"}>
            <h2 className={darkMode ? "text-sm font-semibold text-slate-400 uppercase tracking-wider" : "text-sm font-semibold text-slate-500 uppercase tracking-wider"}>Balance</h2>
            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">₹{Math.round(balance)}</p>
          </div>

          <div className={darkMode ? "bg-slate-800 shadow-md rounded-3xl p-5 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-1" : "bg-white shadow-md rounded-3xl p-5 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-1"}>
            <h2 className={darkMode ? "text-sm font-semibold text-slate-400 uppercase tracking-wider" : "text-sm font-semibold text-slate-500 uppercase tracking-wider"}>Total Income</h2>
            <p className="text-2xl font-bold text-emerald-500 mt-1">₹{Math.round(income)}</p>
          </div>

          <div className={darkMode ? "bg-slate-800 shadow-md rounded-3xl p-5 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-1" : "bg-white shadow-md rounded-3xl p-5 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-1"}>
            <h2 className={darkMode ? "text-sm font-semibold text-slate-400 uppercase tracking-wider" : "text-sm font-semibold text-slate-500 uppercase tracking-wider"}>Total Expense</h2>
            <p className="text-2xl font-bold text-rose-500 mt-1">₹{Math.round(expense)}</p>
          </div>

          <div className={darkMode ? "bg-slate-800 shadow-md rounded-3xl p-5 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-1" : "bg-white shadow-md rounded-3xl p-5 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-1"}>
            <h2 className={darkMode ? "text-sm font-semibold text-slate-400 uppercase tracking-wider" : "text-sm font-semibold text-slate-500 uppercase tracking-wider"}>Total Transactions</h2>
            <p className={darkMode ? "text-2xl font-bold text-white mt-1" : "text-2xl font-bold text-slate-800 mt-1"}>
              {transactions.length}
            </p>
          </div>

          <div className={darkMode ? "bg-slate-800 shadow-md rounded-3xl p-5 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-1" : "bg-white shadow-md rounded-3xl p-5 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-1"}>
            <h2 className={darkMode ? "text-sm font-semibold text-slate-400 uppercase tracking-wider" : "text-sm font-semibold text-slate-500 uppercase tracking-wider"}>Highest Income</h2>
            <p className="text-2xl font-bold text-emerald-500 mt-1">₹{Math.round(highestIncome)}</p>
          </div>

          <div className={darkMode ? "bg-slate-800 shadow-md rounded-3xl p-5 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-1" : "bg-white shadow-md rounded-3xl p-5 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-1"}>
            <h2 className={darkMode ? "text-sm font-semibold text-slate-400 uppercase tracking-wider" : "text-sm font-semibold text-slate-500 uppercase tracking-wider"}>Highest Expense</h2>
            <p className="text-2xl font-bold text-rose-500 mt-1">₹{Math.round(highestExpense)}</p>
          </div>
        </div>

        {/* Category wise expense */}
        <div className="mb-8">
          <h3 className={darkMode ? "text-2xl font-bold text-white mb-6" : "text-2xl font-bold text-slate-800 mb-6"}>
            Expense by Category
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(expenseByCategory).map(([cat, amt]) => (
              <div key={cat} className={darkMode ? "bg-slate-800 shadow-md rounded-2xl p-5 flex items-center justify-between" : "bg-white shadow-md rounded-2xl p-5 flex items-center justify-between"}>
                <h4 className={darkMode ? "text-lg font-semibold text-slate-300" : "text-lg font-semibold text-slate-600"}>{cat}</h4>
                <p className="text-xl font-bold text-rose-500">₹{Math.round(amt)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Time based */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          <div className={darkMode ? "bg-slate-800 shadow-md rounded-3xl p-5 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-1" : "bg-white shadow-md rounded-3xl p-5 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-1"}>
            <h2 className={darkMode ? "text-sm font-semibold text-slate-400 uppercase tracking-wider" : "text-sm font-semibold text-slate-500 uppercase tracking-wider"}>Weekly Expense</h2>
            <p className="text-2xl font-bold text-rose-500 mt-1">₹{Math.round(weeklyExpense)}</p>
          </div>

          <div className={darkMode ? "bg-slate-800 shadow-md rounded-3xl p-5 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-1" : "bg-white shadow-md rounded-3xl p-5 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-1"}>
            <h2 className={darkMode ? "text-sm font-semibold text-slate-400 uppercase tracking-wider" : "text-sm font-semibold text-slate-500 uppercase tracking-wider"}>Monthly Expense</h2>
            <p className="text-2xl font-bold text-rose-500 mt-1">₹{Math.round(monthlyExpense)}</p>
          </div>

          <div className={darkMode ? "bg-slate-800 shadow-md rounded-3xl p-5 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-1" : "bg-white shadow-md rounded-3xl p-5 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-1"}>
            <h2 className={darkMode ? "text-sm font-semibold text-slate-400 uppercase tracking-wider" : "text-sm font-semibold text-slate-500 uppercase tracking-wider"}>Yearly Expense</h2>
            <p className="text-2xl font-bold text-rose-500 mt-1">₹{Math.round(yearlyExpense)}</p>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}

