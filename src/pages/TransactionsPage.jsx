import List from "../components/TransactionList";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export default function TransactionsPage({
  transactions,
  deleteTransaction,
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
          Transaction History
        </h1>

        <List
          transactions={transactions}
          deleteTransaction={deleteTransaction}
          darkMode={darkMode}
        />
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}
