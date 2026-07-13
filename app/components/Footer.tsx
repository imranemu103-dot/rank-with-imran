"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10 text-white">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3"
      >

        <div>
          <h3 className="text-2xl font-bold">
            Rank with <span className="text-blue-500">Imran</span>
          </h3>

          <p className="mt-3 text-slate-400">
            Helping businesses rank higher on Google with professional SEO
            strategies.
          </p>
        </div>


        <div>
          <h4 className="text-lg font-bold">
            Quick Links
          </h4>

          <ul className="mt-3 space-y-2 text-slate-400">
            <li className="transition hover:text-blue-500">Home</li>
            <li className="transition hover:text-blue-500">Services</li>
            <li className="transition hover:text-blue-500">About</li>
            <li className="transition hover:text-blue-500">Contact</li>
          </ul>
        </div>


        <div>
          <h4 className="text-lg font-bold">
            Services
          </h4>

          <ul className="mt-3 space-y-2 text-slate-400">
            <li className="transition hover:text-blue-500">Technical SEO</li>
            <li className="transition hover:text-blue-500">Local SEO</li>
            <li className="transition hover:text-blue-500">On-Page SEO</li>
            <li className="transition hover:text-blue-500">SEO Audit</li>
          </ul>
        </div>

      </motion.div>


      <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Rank with Imran. All rights reserved.
      </div>

    </footer>
  );
}