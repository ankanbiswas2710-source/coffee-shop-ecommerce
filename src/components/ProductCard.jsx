export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-premium">
      <img src={product.image} alt={product.name} className="h-52 w-full object-cover" />
      <div className="space-y-3 p-5">
        <h3 className="text-lg font-semibold text-amber-100">{product.name}</h3>
        <p className="text-sm text-slate-300">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-emerald-300">€{product.price.toFixed(2)}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400"
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
