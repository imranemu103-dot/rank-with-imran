"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Technical SEO",
      description:
        "Improve website performance, crawlability, indexing, Core Web Vitals, and technical issues.",
    },
    {
      title: "Local SEO",
      description:
        "Optimize Google Business Profile and local search presence to attract nearby customers.",
    },
    {
      title: "On-Page SEO",
      description:
        "Optimize content, meta tags, headings, internal links, and website structure.",
    },
    {
      title: "Keyword Research",
      description:
        "Find profitable keywords and create a data-driven SEO growth strategy.",
    },
    {
      title: "SEO Audit",
      description:
        "Analyze website issues and provide actionable recommendations for improvement.",
    },
    {
      title: "WordPress SEO",
      description:
        "Optimize WordPress websites for better rankings, speed, and user experience.",
    },
  ];

  return (
    <section id="services" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold">
            My <span className="text-blue-500">Services</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Professional SEO solutions to help businesses improve rankings,
            traffic, and online visibility.
          </p>
        </motion.div>


        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
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
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500"
            >
              <h3 className="text-xl font-bold text-blue-400">
                {service.title}
              </h3>

              <p className="mt-3 text-slate-400">
                {service.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}