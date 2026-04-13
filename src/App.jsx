import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import TransactionsPage from "./pages/TransactionsPage";
import StatsPage from "./pages/statsPage";
import LoginPage from "./pages/LoginPage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  function addTransaction(newTransaction) {
    if (newTransaction.type === "expense" && newTransaction.amount > balance) {
      alert("Insufficient balance! Transaction not allowed.");
      return;
    }

    setTransactions([...transactions, newTransaction]);
  }

  function deleteTransaction(id) {
    const updated = transactions.filter((t) => t.id !== id);
    setTransactions(updated);
  }

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <Routes>
<Route
        path="/"
        element={
          <HomePage darkMode={darkMode} toggleTheme={toggleTheme} />
        }
      />
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/dashboard"
        element={
          <Dashboard
            balance={balance}
            income={income}
            expense={expense}
            addTransaction={addTransaction}
            darkMode={darkMode}
            toggleTheme={toggleTheme}
          />
        }
      />

      <Route
        path="/transactions"
        element={
          <TransactionsPage
            transactions={transactions}
            deleteTransaction={deleteTransaction}
            darkMode={darkMode}
            toggleTheme={toggleTheme}
          />
        }
      />

      <Route
        path="/stats"
        element={
          <StatsPage
            transactions={transactions}
            balance={balance}
            income={income}
            expense={expense}
        darkMode={darkMode}
            toggleTheme={toggleTheme}
          />
        }
      />

      <Route
        path="/contact"
        element={
          <ContactUsPage
            darkMode={darkMode}
            toggleTheme={toggleTheme}
          />
        }
      />
    </Routes>
  );
}

export default App;