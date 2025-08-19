// app/contact/page.tsx (Next.js 13+ App Router example)
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-600 to-yellow-400 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.2),inset_0_0_20px_rgba(255,165,0,0.15)]
                   max-w-lg w-full transform transition hover:scale-[1.02] hover:rotate-x-2 hover:rotate-y-1
                   animate-fadeIn"
      >
        <h2 className="text-center mb-6 text-orange-500 text-2xl font-bold drop-shadow-sm">
          Contact Us
        </h2>

        {/* Name */}
        <div className="relative mb-6">
          <input
            type="text"
            id="name"
            name="name"
            placeholder=" "
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-4 border-4 border-orange-500 rounded-lg text-center bg-orange-50
                       shadow-inner text-sm focus:outline-none focus:border-orange-600 focus:bg-white
                       focus:text-left focus:shadow-[0_0_15px_rgba(255,152,0,0.6)] peer"
          />
          <label
            htmlFor="name"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white px-1 text-orange-500 text-sm
                       transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base
                       peer-placeholder-shown:text-orange-500 peer-focus:top-0 peer-focus:scale-90 peer-focus:text-orange-600"
          >
            Name
          </label>
        </div>

        {/* Email */}
        <div className="relative mb-6">
          <input
            type="email"
            id="email"
            name="email"
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-4 border-4 border-orange-500 rounded-lg text-center bg-orange-50
                       shadow-inner text-sm focus:outline-none focus:border-orange-600 focus:bg-white
                       focus:text-left focus:shadow-[0_0_15px_rgba(255,152,0,0.6)] peer"
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white px-1 text-orange-500 text-sm
                       transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base
                       peer-placeholder-shown:text-orange-500 peer-focus:top-0 peer-focus:scale-90 peer-focus:text-orange-600"
          >
            Email
          </label>
        </div>

        {/* Message */}
        <div className="relative mb-6">
          <textarea
            id="message"
            name="message"
            placeholder=" "
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-3 py-4 border-4 border-orange-500 rounded-lg text-center bg-orange-50
                       shadow-inner text-sm focus:outline-none focus:border-orange-600 focus:bg-white
                       focus:text-left focus:shadow-[0_0_15px_rgba(255,152,0,0.6)] peer resize-none"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white px-1 text-orange-500 text-sm
                       transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base
                       peer-placeholder-shown:text-orange-500 peer-focus:top-0 peer-focus:scale-90 peer-focus:text-orange-600"
          >
            Message
          </label>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 text-lg font-bold text-white rounded-lg
                     bg-gradient-to-r from-orange-500 to-orange-300
                     shadow-lg hover:from-orange-600 hover:to-orange-400
                     hover:-translate-y-1 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
