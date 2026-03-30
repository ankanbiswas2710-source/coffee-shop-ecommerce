import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function ShopPage({ onAddToCart }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white">Coffee Shop</h1>
      <p className="mt-3 max-w-2xl text-slate-300">
        Browse our complete collection of premium coffee beans, pods and espresso blends available across Ireland.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
}
