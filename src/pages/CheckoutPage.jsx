import { useMemo, useState } from 'react';

export default function CheckoutPage({ cart, onUpdateQty, onRemove }) {
  const [paymentMethod, setPaymentMethod] = useState('card');

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );
  const shipping = subtotal >= 30 || subtotal === 0 ? 0 : 4.95;
  const total = subtotal + shipping;

  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-5 lg:px-8">
      <div className="space-y-6 lg:col-span-3">
        <h1 className="text-4xl font-bold text-white">Checkout</h1>
        <div className="space-y-4">
          {cart.length === 0 ? (
            <p className="rounded-xl border border-white/10 bg-slate-900 p-4 text-slate-300">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-slate-900 p-4">
                <img src={item.image} alt={item.name} className="h-20 w-20 rounded-lg object-cover" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white">{item.name}</h3>
                  <p className="text-sm text-slate-300">€{item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => onUpdateQty(item.id, -1)} className="rounded bg-slate-800 px-3 py-1">-</button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button onClick={() => onUpdateQty(item.id, 1)} className="rounded bg-slate-800 px-3 py-1">+</button>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-sm text-rose-300 hover:text-rose-200">Remove</button>
              </div>
            ))
          )}
        </div>
      </div>

      <aside className="h-fit rounded-2xl border border-white/10 bg-slate-900 p-6 lg:col-span-2">
        <h2 className="text-2xl font-semibold text-amber-100">Payment</h2>
        <div className="mt-4 space-y-3 text-sm text-slate-200">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              checked={paymentMethod === 'card'}
              onChange={() => setPaymentMethod('card')}
            />
            Credit / Debit Card
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              checked={paymentMethod === 'applepay'}
              onChange={() => setPaymentMethod('applepay')}
            />
            Apple Pay
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              checked={paymentMethod === 'paypal'}
              onChange={() => setPaymentMethod('paypal')}
            />
            PayPal
          </label>
        </div>

        <div className="mt-4 space-y-3">
          <input className="w-full rounded-lg border border-white/20 bg-slate-800 p-3" placeholder="Cardholder Name" />
          <input className="w-full rounded-lg border border-white/20 bg-slate-800 p-3" placeholder="Card Number" />
          <div className="grid grid-cols-2 gap-3">
            <input className="rounded-lg border border-white/20 bg-slate-800 p-3" placeholder="MM/YY" />
            <input className="rounded-lg border border-white/20 bg-slate-800 p-3" placeholder="CVC" />
          </div>
        </div>

        <div className="mt-6 space-y-2 border-t border-white/10 pt-4 text-sm">
          <p className="flex justify-between"><span>Subtotal</span><span>€{subtotal.toFixed(2)}</span></p>
          <p className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? 'Free' : `€${shipping.toFixed(2)}`}</span></p>
          <p className="flex justify-between text-base font-bold text-white"><span>Total</span><span>€{total.toFixed(2)}</span></p>
        </div>
        <button
          disabled={cart.length === 0}
          className="mt-6 w-full rounded-full bg-emerald-500 py-3 font-semibold text-white transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Pay Securely
        </button>
      </aside>
    </section>
  );
}
