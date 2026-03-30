import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function HomePage({ onAddToCart }) {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1900&q=80')] bg-cover bg-center opacity-30" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-amber-200/30 bg-amber-200/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-amber-200">
              Premium Irish Coffee
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              Discover Ireland&apos;s most loved artisan coffee delivery.
            </h1>
            <p className="max-w-xl text-lg text-slate-200">
              Freshly roasted beans, curated subscriptions, and barista-grade blends delivered nationwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-400"
              >
                Shop Coffee
              </Link>
              <Link
                to="/about"
                className="rounded-full border border-white/30 px-6 py-3 font-semibold text-slate-100 transition hover:border-white"
              >
                Our Story
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur">
            <h2 className="text-2xl font-semibold text-amber-100">Why customers choose us</h2>
            <ul className="mt-4 space-y-3 text-slate-200">
              <li>✓ Free delivery in Ireland over €30</li>
              <li>✓ Ethically sourced premium beans</li>
              <li>✓ Next-day dispatch from Dublin</li>
              <li>✓ Flexible subscriptions and gifts</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">Featured Blends</h2>
            <p className="text-slate-300">Handpicked favourites from our Irish roastery.</p>
          </div>
          <Link to="/shop" className="text-sm font-semibold text-amber-200 hover:text-amber-100">
            View all products →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>
    </div>
  );
}
