"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
   <section id="home" className="relative flex min-h-screen items-center bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-full border border-blue-500 px-4 py-2 text-sm text-blue-400"
        >
          🔍 SEO Specialist
        </motion.span>


        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl"
        >
          Rank Higher.
          <br />
          Grow Faster.
        </motion.h1>


        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 max-w-2xl text-lg text-slate-300"
        >
          I help businesses improve Google rankings, increase organic traffic,
          and generate more leads with proven SEO strategies.
        </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700">
            Get Free SEO Audit
          </button>

          <button className="rounded-xl border border-slate-600 px-6 py-3 font-semibold transition hover:border-blue-500">
            View Case Studies
          </button>
        </motion.div>

      </div>
    </section>
  );
}