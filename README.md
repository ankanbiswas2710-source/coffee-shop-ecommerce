# Emerald Bean Co. – Coffee Shop Ecommerce (Ireland)

A premium modern ecommerce website for an Irish coffee brand built with **React + Tailwind CSS** and optimized for **Vercel deployment**.

## Features

- Home page with immersive hero banner
- Product listing with prices in EUR (€)
- Add to cart flow with quantity controls
- Checkout page with order summary
- Online payment UI (Card / Apple Pay / PayPal selection)
- About Us page
- Contact page with enquiry form
- Mobile responsive and modern design system

## Tech Stack

- React (Vite)
- React Router
- Tailwind CSS

## Run locally

```bash
npm install
npm run dev
```

Open: `http://localhost:5173`

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

### Option 1: GitHub + Vercel dashboard (recommended)

1. Push this project to a GitHub repository.
2. Go to [https://vercel.com/new](https://vercel.com/new).
3. Import your repository.
4. Framework preset: **Vite** (auto-detected by Vercel).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
vercel --prod
```

When prompted:
- Project type: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Notes

- This project currently includes a **payment UI only** (no real payment gateway integration).
- For live payments, connect Stripe/Adyen/PayPal SDKs and secure server-side APIs.
