import { useState } from "react";

export default function FixedExpenses({ darkMode }) {
  const [expenses, setExpenses] = useState([
    { id: 1, name: "Rent / Mortgage", paid: false },
    { id: 2, name: "Electricity Bill", paid: false },
    { id: 3, name: "Groceries & Milk", paid: false },
    { id: 4, name: "Tuition / School Fee", paid: false },
    { id: 5, name: "Internet & Phone", paid: false },
  ]);
  const [newExpense, setNewExpense] = useState("");

  const toggleExpense = (id) => {
    setExpenses(
      expenses.map((exp) =>
        exp.id === id ? { ...exp, paid: !exp.paid } : exp
      )
    );
  };

  const addExpense = () => {
    if (newExpense.trim()) {
      setExpenses([
        ...expenses,
        { id: Date.now(), name: newExpense, paid: false },
      ]);
      setNewExpense("");
    }
  };

  return (
    <div className={darkMode ? "bg-slate-800 shadow-md rounded-3xl p-6" : "bg-white shadow-md rounded-3xl p-6"}>
      <h2 className={darkMode ? "text-xl font-semibold text-white mb-4" : "text-xl font-semibold text-slate-800 mb-4"}>
        Monthly Fixed Expenses Tracker
      </h2>
      
      <div className="space-y-3 mb-5 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
        {expenses.map((exp) => (
          <label
            key={exp.id}
            className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
              darkMode 
                ? exp.paid ? "bg-emerald-900/20 border-emerald-500/30" : "bg-slate-700/50 border-white/5 hover:bg-slate-700"
                : exp.paid ? "bg-emerald-50 border-emerald-200" : "bg-slate-50 border-slate-200 hover:bg-slate-100"
            }`}
          >
            <input
              type="checkbox"
              checked={exp.paid}
              onChange={() => toggleExpense(exp.id)}
              className="w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 bg-transparent"
            />
            <span className={`flex-1 font-medium ${
              darkMode 
                ? exp.paid ? "text-emerald-400 line-through opacity-60" : "text-slate-200"
                : exp.paid ? "text-emerald-700 line-through opacity-60" : "text-slate-700"
            }`}>
              {exp.name}
            </span>
          </label>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={newExpense}
          onChange={(e) => setNewExpense(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addExpense()}
          placeholder="New fixed expense..."
          className={darkMode 
            ? "flex-1 px-4 py-2.5 rounded-xl border border-slate-600 bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400" 
            : "flex-1 px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          }
        />
        <button
          onClick={addExpense}
          className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition"
        >
          Add
        </button>
      </div>
    </div>
  );
}
