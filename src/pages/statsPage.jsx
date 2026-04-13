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
        darkMode ? "min-h-screen bg-slate-900 p-6" : "min-h-screen bg-slate-100 p-6"
      }
    >
      <div className="max-w-4xl mx-auto">
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

        <h1
          className={
            darkMode
              ? "text-4xl font-bold text-center text-white mb-8"
              : "text-4xl font-bold text-center text-slate-800 mb-8"
          }
        >
          FinTrack Statistics
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          <div className={darkMode ? "bg-slate-800 shadow-md rounded-2xl p-5 text-center" : "bg-white shadow-md rounded-2xl p-5 text-center"}>
            <h2 className={darkMode ? "text-lg font-semibold text-slate-300" : "text-lg font-semibold text-slate-600"}>Balance</h2>
            <p className="text-2xl font-bold text-blue-500">₹{Math.round(balance)}</p>
          </div>

          <div className={darkMode ? "bg-slate-800 shadow-md rounded-2xl p-5 text-center" : "bg-white shadow-md rounded-2xl p-5 text-center"}>
            <h2 className={darkMode ? "text-lg font-semibold text-slate-300" : "text-lg font-semibold text-slate-600"}>Total Income</h2>
            <p className="text-2xl font-bold text-green-500">₹{Math.round(income)}</p>
          </div>

          <div className={darkMode ? "bg-slate-800 shadow-md rounded-2xl p-5 text-center" : "bg-white shadow-md rounded-2xl p-5 text-center"}>
            <h2 className={darkMode ? "text-lg font-semibold text-slate-300" : "text-lg font-semibold text-slate-600"}>Total Expense</h2>
            <p className="text-2xl font-bold text-red-500">₹{Math.round(expense)}</p>
          </div>

          <div className={darkMode ? "bg-slate-800 shadow-md rounded-2xl p-5 text-center" : "bg-white shadow-md rounded-2xl p-5 text-center"}>
            <h2 className={darkMode ? "text-lg font-semibold text-slate-300" : "text-lg font-semibold text-slate-600"}>Total Transactions</h2>
            <p className={darkMode ? "text-2xl font-bold text-white" : "text-2xl font-bold text-slate-800"}>
              {transactions.length}
            </p>
          </div>

          <div className={darkMode ? "bg-slate-800 shadow-md rounded-2xl p-5 text-center" : "bg-white shadow-md rounded-2xl p-5 text-center"}>
            <h2 className={darkMode ? "text-lg font-semibold text-slate-300" : "text-lg font-semibold text-slate-600"}>Highest Income</h2>
            <p className="text-2xl font-bold text-green-500">₹{Math.round(highestIncome)}</p>
          </div>

          <div className={darkMode ? "bg-slate-800 shadow-md rounded-2xl p-5 text-center" : "bg-white shadow-md rounded-2xl p-5 text-center"}>
            <h2 className={darkMode ? "text-lg font-semibold text-slate-300" : "text-lg font-semibold text-slate-600"}>Highest Expense</h2>
            <p className="text-2xl font-bold text-red-500">₹{Math.round(highestExpense)}</p>
          </div>
        </div>

        {/* Category wise expense */}
        <div className="mb-8">
          <h3 className={darkMode ? "text-2xl font-bold text-white mb-6" : "text-2xl font-bold text-slate-800 mb-6"}>
            Expense by Category
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(expenseByCategory).map(([cat, amt]) => (
              <div key={cat} className={darkMode ? "bg-slate-800 shadow-md rounded-2xl p-5" : "bg-white shadow-md rounded-2xl p-5"}>
                <h4 className={darkMode ? "text-lg font-semibold text-slate-300 mb-2" : "text-lg font-semibold text-slate-600 mb-2"}>{cat}</h4>
                <p className="text-2xl font-bold text-red-500">₹{Math.round(amt)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Time based */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          <div className={darkMode ? "bg-slate-800 shadow-md rounded-2xl p-5 text-center" : "bg-white shadow-md rounded-2xl p-5 text-center"}>
            <h2 className={darkMode ? "text-lg font-semibold text-slate-300" : "text-lg font-semibold text-slate-600"}>Weekly Expense</h2>
            <p className="text-2xl font-bold text-red-500">₹{Math.round(weeklyExpense)}</p>
          </div>

          <div className={darkMode ? "bg-slate-800 shadow-md rounded-2xl p-5 text-center" : "bg-white shadow-md rounded-2xl p-5 text-center"}>
            <h2 className={darkMode ? "text-lg font-semibold text-slate-300" : "text-lg font-semibold text-slate-600"}>Monthly Expense</h2>
            <p className="text-2xl font-bold text-red-500">₹{Math.round(monthlyExpense)}</p>
          </div>

          <div className={darkMode ? "bg-slate-800 shadow-md rounded-2xl p-5 text-center" : "bg-white shadow-md rounded-2xl p-5 text-center"}>
            <h2 className={darkMode ? "text-lg font-semibold text-slate-300" : "text-lg font-semibold text-slate-600"}>Yearly Expense</h2>
            <p className="text-2xl font-bold text-red-500">₹{Math.round(yearlyExpense)}</p>
          </div>
        </div>

        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}

