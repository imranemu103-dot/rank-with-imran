export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Website Audit",
      description:
        "Analyze your website to find technical issues, SEO errors, and growth opportunities.",
    },
    {
      number: "02",
      title: "Keyword Strategy",
      description:
        "Research profitable keywords that match your business goals and target audience.",
    },
    {
      number: "03",
      title: "On-Page Optimization",
      description:
        "Optimize content, meta tags, headings, internal links, and website structure.",
    },
    {
      number: "04",
      title: "Monitor & Growth",
      description:
        "Track performance, measure results, and continuously improve rankings.",
    },
  ];

  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            My SEO <span className="text-blue-500">Process</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            A proven step-by-step process to improve your website rankings and
            grow organic traffic.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
            >
              <span className="text-3xl font-bold text-blue-500">
                {step.number}
              </span>

              <h3 className="mt-4 text-xl font-bold">
                {step.title}
              </h3>

              <p className="mt-3 text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}