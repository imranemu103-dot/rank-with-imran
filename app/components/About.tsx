"use client";

import { motion } from "framer-motion";

export default function About() {
  const cards = [
    {
      title: "SEO Expertise",
      description:
        "Technical SEO, Local SEO, On-Page SEO, Keyword Research.",
    },
    {
      title: "Tools",
      description:
        "Google Search Console, Analytics, WordPress, SEO Tools.",
    },
    {
      title: "Approach",
      description:
        "Data-driven strategies with white-hat SEO methods.",
    },
    {
      title: "Goal",
      description:
        "Better rankings, more traffic, and business growth.",
    },
  ];

  return (
    <section id="about" className="bg-slate-900 py-20 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="font-semibold text-blue-400">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Helping Businesses
            <span className="text-blue-500"> Rank Higher</span>
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            I am an SEO Specialist focused on improving Google rankings,
            increasing organic traffic, and building data-driven SEO strategies
            for businesses.
          </p>

          <p className="mt-4 leading-8 text-slate-400">
            My expertise includes Technical SEO, Local SEO, On-Page SEO,
            Keyword Research, WordPress SEO, and SEO Audits.
          </p>

          <button className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700">
            Let's Work Together
          </button>

        </motion.div>


        <div className="grid gap-5 sm:grid-cols-2">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-blue-500"
            >
              <h3 className="text-xl font-bold text-blue-400">
                {card.title}
              </h3>

              <p className="mt-3 text-slate-400">
                {card.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}