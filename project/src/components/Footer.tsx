import { Instagram, MapPin, Phone, Clock } from 'lucide-react';

const quickLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Hours & Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center">
                <span className="text-slate-950 font-black text-lg tracking-tighter">
                  L
                </span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-base tracking-tight">
                  The Lab Street Eats
                </span>
                <span className="text-amber-500/80 text-[11px] font-medium tracking-wide uppercase">
                  Kitchener · Ontario
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Craft eats, house-made ingredients, and local comfort food in the
              heart of downtown Kitchener.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-amber-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">
              Visit
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                105 Victoria St S, Kitchener, ON N2G 2B4
              </li>
              <li className="flex items-center gap-2.5 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a
                  href="tel:+15196035508"
                  className="hover:text-amber-400 transition-colors"
                >
                  (519) 603-5508
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400 text-sm">
                <Clock className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                Tue–Sat: 11:30 AM – 8:00 PM
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">
              Follow Us
            </h4>
            <a
              href="https://www.instagram.com/labstreeteats"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/40 rounded-xl text-slate-300 hover:text-white text-sm font-semibold transition-all duration-200 group"
            >
              <Instagram className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />
              @labstreeteats
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} The Lab Street Eats. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Crafted with flavor in Kitchener, Ontario.
          </p>
        </div>
      </div>
    </footer>
  );
}
