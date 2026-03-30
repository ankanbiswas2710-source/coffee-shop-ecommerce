export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white">Contact Us</h1>
      <p className="mt-3 text-slate-300">Questions, wholesale enquiries, or support requests? We'd love to help.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="space-y-2 rounded-2xl border border-white/10 bg-slate-900 p-6">
          <p className="text-slate-200"><strong>Email:</strong> hello@emeraldbean.ie</p>
          <p className="text-slate-200"><strong>Phone:</strong> +353 1 555 0199</p>
          <p className="text-slate-200"><strong>Address:</strong> 18 Barrow Street, Dublin 4, Ireland</p>
        </div>
        <form className="space-y-3 rounded-2xl border border-white/10 bg-slate-900 p-6">
          <input className="w-full rounded-lg border border-white/20 bg-slate-800 p-3" placeholder="Your Name" />
          <input className="w-full rounded-lg border border-white/20 bg-slate-800 p-3" placeholder="Email Address" />
          <textarea
            className="min-h-32 w-full rounded-lg border border-white/20 bg-slate-800 p-3"
            placeholder="How can we help?"
          />
          <button className="rounded-full bg-amber-400 px-5 py-2 font-semibold text-slate-900">Send Message</button>
        </form>
      </div>
    </section>
  );
}
