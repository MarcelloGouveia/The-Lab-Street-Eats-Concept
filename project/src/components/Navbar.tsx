import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, ShoppingBag } from 'lucide-react';

const links = [
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Hours & Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  showOrder?: boolean;
}

export default function Navbar({ showOrder = true }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-amber-500/20 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#top" className="flex items-center gap-2.5 group">
  <img 
    src="/logo.png" 
    alt="The Lab Street Eats" 
    className="h-12 w-auto object-contain transition-transform group-hover:scale-105" 
  />
</a>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </div>

          {showOrder && (
            <div className="hidden lg:block">
              <a
                href="#order"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5"
              >
                <ShoppingBag className="w-4 h-4" />
                Order Online / Takeout
              </a>
            </div>
          )}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-6 pt-2 space-y-1 bg-slate-950/98 backdrop-blur-md rounded-b-lg border-b border-amber-500/20 -mx-4 sm:-mx-6 px-4 sm:px-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-200 hover:text-amber-500 hover:bg-slate-900/60 rounded-lg transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            {showOrder && (
              <a
                href="#order"
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 px-5 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-lg transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                Order Online / Takeout
              </a>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
