export default function Stats() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
        
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center">
          <h3 className="text-3xl font-bold text-blue-500">Technical</h3>
          <p className="mt-2 text-slate-400">SEO</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center">
          <h3 className="text-3xl font-bold text-blue-500">Local</h3>
          <p className="mt-2 text-slate-400">SEO</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center">
          <h3 className="text-3xl font-bold text-blue-500">On-Page</h3>
          <p className="mt-2 text-slate-400">Optimization</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center">
          <h3 className="text-3xl font-bold text-blue-500">Keyword</h3>
          <p className="mt-2 text-slate-400">Research</p>
        </div>

      </div>
    </section>
  );
}