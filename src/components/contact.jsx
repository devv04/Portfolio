import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you for reaching out!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#0f1115] to-black py-20 px-6 text-white"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-[#00FFC6] pb-2">Contact Me</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-[#1a1c22] p-8 rounded-2xl shadow-md"
        >
          <div>
            <label htmlFor="name" className="block mb-2 font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md bg-[#2a2d34] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md bg-[#2a2d34] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full px-4 py-3 rounded-md bg-[#2a2d34] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button className="mt-6 px-6 py-3 rounded-xl border-2 border-[#00FFC6] text-[#00FFC6] hover:bg-[#00FFC6] hover:text-black transition-all duration-300 font-semibold shadow-md">
           Let’s Connect
          </button>

        </form>
      </div>
    </section>
  );
}
