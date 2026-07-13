"use client";

import { motion } from "framer-motion";

export default function CaseStudies() {
  const projects = [
    {
      title: "E-commerce SEO Growth",
      category: "Technical SEO + On-Page SEO",
      description:
        "Improved website structure, optimized pages, and created a better SEO strategy for organic growth.",
    },
    {
      title: "Local Business Ranking",
      category: "Local SEO",
      description:
        "Optimized Google Business Profile and local SEO factors to improve search visibility.",
    },
    {
      title: "Content SEO Strategy",
      category: "Keyword Research + Content",
      description:
        "Created keyword-focused content strategies to attract targeted organic visitors.",
    },
  ];

  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold">
            Case <span className="text-blue-500">Studies</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Real SEO strategies and solutions designed to improve online
            visibility and organic growth.
          </p>
        </motion.div>


        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500"
            >

              <p className="text-sm text-blue-400">
                {project.category}
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 text-slate-400">
                {project.description}
              </p>

              <button className="mt-6 text-blue-400 transition hover:text-blue-300">
                View Details →
              </button>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}