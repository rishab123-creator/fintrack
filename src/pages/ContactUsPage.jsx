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
          ? "min-h-screen flex flex-col bg-slate-900 p-6"
          : "min-h-screen flex flex-col bg-slate-100 p-6"
      }
    >
      <div className="flex-1 max-w-5xl mx-auto w-full">
        
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

        <div className="text-center mt-16">
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

        <div className="max-w-2xl mx-auto mt-16">
          {/* Contact Form */}
          <div>
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
                      ? "bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                      : "bg-white border-slate-300 text-slate-800 placeholder-slate-500 focus:border-blue-500 focus:outline-none"
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
                      ? "bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                      : "bg-white border-slate-300 text-slate-800 placeholder-slate-500 focus:border-blue-500 focus:outline-none"
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
                  className={`w-full px-4 py-3 rounded-xl border resize-vertical ${
                    darkMode
                      ? "bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                      : "bg-white border-slate-300 text-slate-800 placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                  }`}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
}
