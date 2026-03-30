export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl space-y-8 px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white">About Emerald Bean Co.</h1>
      <p className="text-lg text-slate-200">
        We are an Irish coffee brand dedicated to sourcing world-class beans and roasting locally in Dublin with a focus
        on sustainability, traceability, and exceptional flavour.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
          <h2 className="text-xl font-semibold text-amber-100">Our Mission</h2>
          <p className="mt-2 text-slate-300">Deliver barista-quality coffee experiences to every home in Ireland.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
          <h2 className="text-xl font-semibold text-amber-100">Ethical Sourcing</h2>
          <p className="mt-2 text-slate-300">Partnering with responsible farms with transparent supply chains.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
          <h2 className="text-xl font-semibold text-amber-100">Fresh Roasts</h2>
          <p className="mt-2 text-slate-300">Every batch is roasted weekly and shipped quickly for peak flavour.</p>
        </div>
      </div>
    </section>
  );
}
