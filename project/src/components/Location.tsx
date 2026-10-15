import { MapPin, Phone, Clock, Navigation, Calendar } from 'lucide-react';

const hours = [
  { day: 'Tuesday', time: '11:30 AM – 8:00 PM' },
  { day: 'Wednesday', time: '11:30 AM – 8:00 PM' },
  { day: 'Thursday', time: '11:30 AM – 8:00 PM' },
  { day: 'Friday', time: '11:30 AM – 8:00 PM' },
  { day: 'Saturday', time: '11:30 AM – 8:00 PM' },
];

const mapsUrl =
  'https://www.google.com/maps/dir/?api=1&destination=105+Victoria+St+S,+Kitchener,+ON+N2G+2B4';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">
            Visit Us
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white tracking-tight">
            Hours & Location
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Address</h3>
                <p className="mt-1 text-slate-400">
                  105 Victoria St S
                  <br />
                  Kitchener, ON N2G 2B4
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <Phone className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Phone</h3>
                <a
                  href="tel:+15196035508"
                  className="mt-1 block text-slate-400 hover:text-amber-400 transition-colors"
                >
                  (519) 603-5508
                </a>
              </div>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5"
            >
              <Navigation className="w-5 h-5" />
              Get Directions on Google Maps
            </a>
          </div>

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-white font-bold text-lg">Opening Hours</h3>
            </div>

            <div className="space-y-2.5">
              {hours.map(({ day, time }) => (
                <div
                  key={day}
                  className="flex items-center justify-between py-2.5 px-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
                >
                  <span className="text-slate-300 font-medium text-sm">
                    {day}
                  </span>
                  <span className="text-amber-500 font-semibold text-sm">
                    {time}
                  </span>
                </div>
              ))}

              <div className="flex items-center justify-between py-2.5 px-4 rounded-lg bg-slate-800/30">
                <span className="text-slate-500 font-medium text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Sunday & Monday
                </span>
                <span className="text-red-400/80 font-semibold text-sm">
                  Closed
                </span>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-amber-500/5 border border-amber-500/15">
              <p className="text-amber-400/90 text-sm leading-relaxed">
                Kitchen closes 30 minutes before closing time. Walk-ins welcome —
                reservations recommended for groups of 6+.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
