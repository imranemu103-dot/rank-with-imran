"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold">
            Let's <span className="text-blue-500">Work Together</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Have a project in mind? Send me a message and let's discuss how
            SEO can help grow your business.
          </p>

          <div className="mt-6 space-y-2 text-slate-300">
            <p>📧 Email: imranemu103@gmail.com</p>
            <p>📱 Phone: +8801788037347</p>
          </div>

        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-3xl rounded-2xl border border-slate-800 bg-slate-900 p-8"
        >

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />


            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />


            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />


            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-3 font-semibold transition hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>

        </motion.div>

      </div>
    </section>
  );
}