import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export default function ContactUsPage({ darkMode, toggleTheme }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className={
        darkMode
          ? "min-h-screen flex flex-col bg-slate-900"
          : "min-h-screen flex flex-col bg-slate-100"
      }
    >
      {/* Full-width Navbar Container */}
      <div className="w-full pt-6 px-4 sm:px-6 lg:px-8 z-10 relative">
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      </div>

      {/* Main Content Boxed */}
      <div className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-2 pb-12">
        <div className="text-center mt-8">
          <h1
            className={
              darkMode
                ? "text-5xl font-bold text-white mb-6"
                : "text-5xl font-bold text-slate-800 mb-6"
            }
          >
            Contact Us
          </h1>

          <p
            className={
              darkMode
                ? "text-xl text-slate-300 mb-12"
                : "text-xl text-slate-600 mb-12"
            }
          >
            Get in touch with us for support or feedback.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mt-8">
          {/* Contact Form */}
          <div className={darkMode ? "bg-slate-800 shadow-md rounded-3xl p-8" : "bg-white shadow-md rounded-3xl p-8"}>
            <h2
              className={
                darkMode
                  ? "text-2xl font-bold text-white mb-6 text-center"
                  : "text-2xl font-bold text-slate-800 mb-6 text-center"
              }
            >
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border ${
                    darkMode
                      ? "bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                      : "bg-slate-50 border-slate-300 text-slate-800 placeholder-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                  }`}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border ${
                    darkMode
                      ? "bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                      : "bg-slate-50 border-slate-300 text-slate-800 placeholder-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                  }`}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border resize-y ${
                    darkMode
                      ? "bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                      : "bg-slate-50 border-slate-300 text-slate-800 placeholder-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                  }`}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition shadow-md mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>

      <div className="mt-auto">
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}
