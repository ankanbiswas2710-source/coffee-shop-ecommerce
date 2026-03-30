import { Link, NavLink } from 'react-router-dom';

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm font-medium transition ${isActive ? 'text-amber-300' : 'text-slate-200 hover:text-amber-200'}`
      }
    >
      {children}
    </NavLink>
  );
}

export default function Navbar({ cartCount }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-semibold tracking-wide text-amber-200">
          Emerald Bean Co.
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/shop">Shop</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavLink
            to="/checkout"
            className="rounded-full bg-amber-300/20 px-3 py-1.5 text-sm font-semibold text-amber-100 hover:bg-amber-300/30"
          >
            Cart ({cartCount})
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
