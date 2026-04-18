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
        darkMode ? "min-h-screen bg-slate-900 flex flex-col" : "min-h-screen bg-slate-100 flex flex-col"
      }
    >
      {/* Full-width Navbar Container */}
      <div className="w-full pt-6 px-4 sm:px-6 lg:px-8 z-10 relative">
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      </div>

      {/* Main Content Boxed */}
      <div className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-2 pb-12">
        <h1
          className={
            darkMode
              ? "text-4xl font-bold text-center text-white mb-8 mt-4"
              : "text-4xl font-bold text-center text-slate-800 mb-8 mt-4"
          }
        >
          Transaction History
        </h1>

        <List
          transactions={transactions}
          deleteTransaction={deleteTransaction}
          darkMode={darkMode}
        />
      </div>

      <div className="mt-auto">
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}
