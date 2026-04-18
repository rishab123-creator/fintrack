import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import AnimatedGlobeBackground from "../components/AnimatedGlobeBackground";
import { motion } from "framer-motion";

export default function HomePage({ darkMode, toggleTheme }) {
  return (
    <div
      className={
        darkMode
          ? "min-h-screen flex flex-col bg-slate-950 px-0 overflow-x-hidden"
          : "min-h-screen flex flex-col bg-slate-100 px-0 overflow-x-hidden"
      }
    >
      <div className="relative flex-1 w-full home-hero">
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

        <div className="relative flex min-h-screen w-full overflow-hidden">
          <AnimatedGlobeBackground darkMode={darkMode} />
          <div className="absolute inset-x-0 top-1/4 overflow-hidden pointer-events-none z-0 flex items-center opacity-[0.04] dark:opacity-[0.06] select-none">
            <div className="animate-marquee flex gap-12 text-slate-900 dark:text-white">
              <span className="text-[14rem] md:text-[20rem] font-black uppercase tracking-tighter whitespace-nowrap leading-none">FINTRACK</span>
              <span className="text-[14rem] md:text-[20rem] font-black uppercase tracking-tighter text-transparent whitespace-nowrap leading-none" style={{WebkitTextStroke: '3px currentColor'}}>FINTRACK</span>
              <span className="text-[14rem] md:text-[20rem] font-black uppercase tracking-tighter whitespace-nowrap leading-none">FINTRACK</span>
              <span className="text-[14rem] md:text-[20rem] font-black uppercase tracking-tighter text-transparent whitespace-nowrap leading-none" style={{WebkitTextStroke: '3px currentColor'}}>FINTRACK</span>
              <span className="text-[14rem] md:text-[20rem] font-black uppercase tracking-tighter whitespace-nowrap leading-none">FINTRACK</span>
              <span className="text-[14rem] md:text-[20rem] font-black uppercase tracking-tighter text-transparent whitespace-nowrap leading-none" style={{WebkitTextStroke: '3px currentColor'}}>FINTRACK</span>
            </div>
          </div><div className="relative flex-1 w-full px-4 lg:px-6 z-10">
            <div className="relative mx-auto max-w-6xl text-center mt-16 px-4 sm:px-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={
              darkMode
                ? "text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight relative z-10"
                : "text-6xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight relative z-10"
            }
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 animate-gradient-text">Welcome to</span> FinTrack
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className={
              darkMode
                ? "text-xl md:text-2xl text-slate-300 mb-6 max-w-3xl mx-auto"
                : "text-xl md:text-2xl text-slate-600 mb-6 max-w-3xl mx-auto"
            }
          >
            Track your money intelligently, get spending insights, and receive investment suggestions that match your goals.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className={
              darkMode
                ? "text-lg italic text-slate-400 mb-10 top-1 relative"
                : "text-lg italic text-slate-500 mb-10 top-1 relative"
            }
          >
            “FinTrack helps you spot overspending, save smarter, and stay ahead with real-time finance alerts.”
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="z-20 relative"
          >
            <Link to="/login">
              <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(52,211,153,0.6)]">
              Get Started
            </button>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, staggerChildren: 0.1 }}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left relative z-10"
          >
            <motion.div whileHover={{ y: -5 }} className={
                darkMode
                  ? "rounded-[28px] border-2 border-emerald-200/80 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl animate-glow-card animate-float-card transition duration-300 ease-out translate-y-1 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-emerald-300/20"
                  : "rounded-[28px] border-2 border-emerald-200/80 bg-white/90 p-6 shadow-2xl shadow-emerald-300/20 backdrop-blur-xl animate-glow-card animate-float-card transition duration-300 ease-out translate-y-1 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-emerald-300/20"
              }>
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-emerald-500/15 p-3 text-emerald-500">
                💡
              </div>
              <h2 className={
                  darkMode
                    ? "text-xl font-semibold text-white mb-2"
                    : "text-xl font-semibold text-slate-900 mb-2"
                }>
                Smart insights
              </h2>
              <p className={
                  darkMode
                    ? "text-sm text-slate-300"
                    : "text-sm text-slate-600"
                }>
                See your spending patterns, cash flow, and saving opportunities at a glance.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className={
                darkMode
                  ? "rounded-[28px] border-2 border-emerald-200/80 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl animate-glow-card animate-float-card transition duration-300 ease-out translate-y-1 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-emerald-300/20"
                  : "rounded-[28px] border-2 border-emerald-200/80 bg-white/90 p-6 shadow-2xl shadow-emerald-300/20 backdrop-blur-xl animate-glow-card animate-float-card transition duration-300 ease-out translate-y-1 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-emerald-300/20"
              }>
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-emerald-500/15 p-3 text-emerald-500">
                📊
              </div>
              <h2 className={
                  darkMode
                    ? "text-xl font-semibold text-white mb-2"
                    : "text-xl font-semibold text-slate-900 mb-2"
                }>
                Budget power
              </h2>
              <p className={
                  darkMode
                    ? "text-sm text-slate-300"
                    : "text-sm text-slate-600"
                }>
                Create custom budgets, monitor categories, and stay ahead of overspending.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className={
                darkMode
                  ? "rounded-[28px] border-2 border-emerald-200/80 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl animate-glow-card animate-float-card transition duration-300 ease-out translate-y-1 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-emerald-300/20"
                  : "rounded-[28px] border-2 border-emerald-200/80 bg-white/90 p-6 shadow-2xl shadow-emerald-300/20 backdrop-blur-xl animate-glow-card animate-float-card transition duration-300 ease-out translate-y-1 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-emerald-300/20"
              }>
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-emerald-500/15 p-3 text-emerald-500">
                🔔
              </div>
              <h2 className={
                  darkMode
                    ? "text-xl font-semibold text-white mb-2"
                    : "text-xl font-semibold text-slate-900 mb-2"
                }>
                Instant alerts
              </h2>
              <p className={
                  darkMode
                    ? "text-sm text-slate-300"
                    : "text-sm text-slate-600"
                }>
                Stay notified when bills, goals, or key transactions need your attention.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className={
                darkMode
                  ? "rounded-[28px] border-2 border-emerald-200/80 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl animate-glow-card animate-float-card transition duration-300 ease-out translate-y-1 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-emerald-300/20"
                  : "rounded-[28px] border-2 border-emerald-200/80 bg-white/90 p-6 shadow-2xl shadow-emerald-300/20 backdrop-blur-xl animate-glow-card animate-float-card transition duration-300 ease-out translate-y-1 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-emerald-300/20"
              }>
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-emerald-500/15 p-3 text-emerald-500">
                🔒
              </div>
              <h2 className={
                  darkMode
                    ? "text-xl font-semibold text-white mb-2"
                    : "text-xl font-semibold text-slate-900 mb-2"
                }>
                Secure control
              </h2>
              <p className={
                  darkMode
                    ? "text-sm text-slate-300"
                    : "text-sm text-slate-600"
                }>
                Keep all your financial data safe with modern security and private tracking.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 rounded-[40px] border-[3px] animate-border-glow bg-white/95 p-8 backdrop-blur-xl transition duration-300 ease-out"
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
               <div className="space-y-5">
                 <span className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-800">
                   How FinTrack works
                 </span>
                 <h2 className="text-4xl font-bold text-slate-900">
                   Smarter tracking, better suggestions, real-time alerts.
                 </h2>
                 <p className="text-slate-800 font-medium text-lg">
                   FinTrack automatically categorizes your spending, monitors cash flow, and recommends the best actions based on your habits and market conditions.
                 </p>
                 <div className="grid gap-4 sm:grid-cols-2">
                   <div className="rounded-3xl bg-slate-50 p-5 shadow-lg shadow-slate-200/20 border border-slate-300/80 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-emerald-200/30">
                     <p className="text-sm uppercase tracking-[0.24em] text-slate-900 font-bold">Track spending</p>
                     <p className="mt-2 text-sm text-slate-800 font-medium">Your transactions are sorted automatically so you see every expense clearly.</p>
                   </div>
                   <div className="rounded-3xl bg-slate-50 p-5 shadow-lg shadow-slate-200/20 border border-slate-300/80 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-emerald-200/30">
                     <p className="text-sm uppercase tracking-[0.24em] text-slate-900 font-bold">Smart suggestions</p>
                     <p className="mt-2 text-sm text-slate-800 font-medium">Get practical saving and investment advice designed for your financial goals.</p>
                   </div>
                 </div>
              </div>

              <div className="relative rounded-[32px] bg-white p-8 shadow-2xl shadow-emerald-150/20 border border-slate-300/80 animate-glow-card animate-float-card transition duration-300 ease-out hover:-translate-y-1">
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-emerald-400/20 to-transparent blur-3xl pointer-events-none"></div>
                <div className="relative space-y-5">
                  <div className="rounded-3xl bg-emerald-50 p-5 border border-slate-300/70 shadow-sm shadow-slate-200/10 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-emerald-200/20">
                    <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-900">Real-time alerts</p>
                    <p className="mt-2 text-sm text-slate-800 font-medium">Receive instant alerts on overspending, goal progress, and market shifts.</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-5 border border-slate-300/70 shadow-sm shadow-slate-200/10 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-emerald-200/20">
                    <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-900">Market pulse</p>
                    <p className="mt-2 text-sm text-slate-800 font-medium">See finance market trends and get alerts when your portfolio should adapt.</p>
                  </div>
                  <div className="rounded-3xl bg-white p-5 border border-slate-300/70 shadow-sm shadow-slate-200/10 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-emerald-200/20">
                    <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-900">Goal planning</p>
                    <p className="mt-2 text-sm text-slate-800 font-medium">Set savings targets and let FinTrack keep you on the right path.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
          </div>
        </div>
      </div>

      {/* Footer should be outside the centered container */}
      <Footer darkMode={darkMode} />
    </div>
  );
}