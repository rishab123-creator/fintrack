export default function Footer({ darkMode }) {
  return (
    <footer className={`mt-auto pt-12 pb-12 text-center border-t text-xs ${
      darkMode 
        ? "border-slate-700 text-slate-400" 
        : "border-slate-200 text-slate-600"
    }`}>
      <p>
        FinTrack - Track your finances effortlessly. Manage income, expenses &amp; statistics. © 2024
      </p>
    </footer>
  );
}
