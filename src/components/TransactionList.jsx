export default function List({ transactions, deleteTransaction, darkMode }) {
  return (
    <div
      className={
        darkMode
          ? "bg-slate-800 shadow-md rounded-2xl p-6"
          : "bg-white shadow-md rounded-2xl p-6"
      }
    >
      <h2
        className={
          darkMode
            ? "text-2xl font-semibold text-white mb-5"
            : "text-2xl font-semibold text-slate-800 mb-5"
        }
      >
        Transactions
      </h2>

      {transactions.length === 0 ? (
        <p className={darkMode ? "text-slate-300" : "text-slate-500"}>
          No transactions yet.
        </p>
      ) : (
        <ul className="space-y-4">
          {transactions.map((t) => (
            <li
              key={t.id}
              className={
                darkMode
                  ? "flex justify-between items-center bg-slate-700 border border-slate-600 rounded-xl p-4"
                  : "flex justify-between items-center bg-slate-50 border border-slate-200 rounded-xl p-4"
              }
            >
              <div>
                <p
                  className={
                    darkMode
                      ? "text-lg font-semibold text-white"
                      : "text-lg font-semibold text-slate-800"
                  }
                >
                  {t.title}
                </p>

                <p
                  className={`font-medium ${
                    t.type === "income" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  ₹{t.amount} • {t.type}
                  {t.category && ` • ${t.category}`}
                </p>

                <p className={darkMode ? "text-sm text-slate-300" : "text-sm text-slate-500"}>
                  {t.date}
                </p>
              </div>

              <button
                onClick={() => deleteTransaction(t.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
