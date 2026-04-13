import { useState } from "react";

export default function Form({ addTransaction, darkMode }) {
  const [input, setInput] = useState("");
  const [type, setType] = useState("expense");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [showCustomCategory, setShowCustomCategory] = useState(false);
  const [customCategory, setCustomCategory] = useState("");

  const incomeCategories = ["Salary", "Freelance", "Investment"];
  const expenseCategories = ["Food", "Transport", "Entertainment", "Bills", "Shopping"];

  const categories = type === "income" ? incomeCategories : expenseCategories;

  const handleCategoryChange = (e) => {
    if (e.target.value === "custom") {
      setShowCustomCategory(true);
      setCategory("");
    } else {
      setShowCustomCategory(false);
      setCategory(e.target.value);
    }
  };

  function handleAdd() {
    if (!input || !date || (!category && !customCategory)) return;

    const finalCategory = category || customCategory;
    const newTransaction = {
      id: Date.now(),
      title: finalCategory,
      amount: Number(input),
      type: type,
      date: date,
      category: finalCategory,
    };

    addTransaction(newTransaction);

    setInput("");
    setType("expense");
    setDate("");
    setCategory("");
    setCustomCategory("");
    setShowCustomCategory(false);
  }

  return (
    <div className={darkMode ? "bg-slate-800 shadow-md rounded-2xl p-6" : "bg-white shadow-md rounded-2xl p-6"}>
      <h2 className={darkMode ? "text-2xl font-semibold text-white mb-5" : "text-2xl font-semibold text-slate-800 mb-5"}>
        Add Transaction
      </h2>

      <div className="grid gap-4">
        <input
          type="number"
          placeholder="Enter Amount"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setCategory("");
            setCustomCategory("");
            setShowCustomCategory(false);
          }}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <select
          value={category}
          onChange={handleCategoryChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
          <option value="custom">+ Custom Category</option>
        </select>

        {showCustomCategory && (
          <input
            type="text"
            placeholder="Enter custom category name"
            value={customCategory}
            onChange={(e) => setCustomCategory(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        )}

        <button
          onClick={handleAdd}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
          disabled={!input || !date || (!category && !customCategory)}
        >
          Add Transaction
        </button>
      </div>
    </div>
  );
}
