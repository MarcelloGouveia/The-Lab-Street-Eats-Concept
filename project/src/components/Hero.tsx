import { useEffect, useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const dayIndexes: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

const openingMinutes = 11 * 60 + 30;
const closingMinutes = 20 * 60;

interface RestaurantStatus {
  isOpen: boolean;
  message: string;
}

function getRestaurantStatus(): RestaurantStatus {
  const now = new Date();
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Toronto',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(now);
  const weekday = parts.find((part) => part.type === 'weekday')?.value ?? 'Sun';
  const hour = Number(parts.find((part) => part.type === 'hour')?.value ?? 0);
  const minute = Number(parts.find((part) => part.type === 'minute')?.value ?? 0);
  const currentDay = dayIndexes[weekday];
  const currentMinutes = hour * 60 + minute;
  const isOperatingDay = currentDay >= 2 && currentDay <= 6;

  if (isOperatingDay && currentMinutes >= openingMinutes && currentMinutes < closingMinutes) {
    return { isOpen: true, message: 'Open now · Closes 8 PM' };
  }

  if (isOperatingDay && currentMinutes < openingMinutes) {
    return { isOpen: false, message: 'Closed · Opens 11:30 AM today' };
  }

  const nextOpeningDay = currentDay === 6 ? 'Tue' : currentDay < 2 ? 'Tue' : 'tomorrow';
  return { isOpen: false, message: `Closed · Opens 11:30 AM ${nextOpeningDay}` };
}

export default function Hero() {
  const [restaurantStatus, setRestaurantStatus] = useState<RestaurantStatus>(() =>
    getRestaurantStatus()
  );

  useEffect(() => {
    const refreshStatus = () => setRestaurantStatus(getRestaurantStatus());
    const interval = window.setInterval(refreshStatus, 60_000);
    return () => window.clearInterval(interval);
  }, []);
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/38895557/pexels-photo-38895557.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1600"
          alt="Gourmet craft sandwich with crispy fries"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border backdrop-blur-sm ${
              restaurantStatus.isOpen
                ? 'bg-emerald-950/80 border-emerald-500/30'
                : 'bg-stone-950/85 border-stone-600/50'
            }`}
            aria-live="polite"
          >
            <span
              className={`w-2 h-2 rounded-full ${
                restaurantStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-stone-400'
              }`}
            />
            <span
              className={`text-xs font-semibold tracking-[0.18em] uppercase ${
                restaurantStatus.isOpen ? 'text-emerald-300' : 'text-stone-300'
              }`}
            >
              {restaurantStatus.message}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
            Craft Eats.
            <br />
            <span className="text-amber-500">Unmatched Flavor.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl">
            Homemade ingredients, house-pickled veggies, and local comfort food
            crafted with obsession. This is street food, elevated.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5 group"
            >
              Explore Menu
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#location"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-900/60 hover:bg-slate-800/80 text-white font-bold text-base rounded-xl border border-slate-700 hover:border-amber-500/50 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <MapPin className="w-5 h-5 text-amber-500" />
              Find Us
            </a>
          </div>

          <div className="mt-14 flex items-center gap-8">
            <div>
              <div className="text-3xl font-black text-amber-500">12+</div>
              <div className="text-xs text-slate-400 uppercase tracking-wide mt-1">
                Signature Items
              </div>
            </div>
            <div className="w-px h-12 bg-slate-700" />
            <div>
              <div className="text-3xl font-black text-amber-500">100%</div>
              <div className="text-xs text-slate-400 uppercase tracking-wide mt-1">
                House-Made
              </div>
            </div>
            <div className="w-px h-12 bg-slate-700" />
            <div>
              <div className="text-3xl font-black text-amber-500">Local</div>
              <div className="text-xs text-slate-400 uppercase tracking-wide mt-1">
                Craft Brews
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-10" />
    </section>
  );
}
