import { Flame, ChefHat, Heart } from 'lucide-react';

const pillars = [
  {
    icon: ChefHat,
    title: 'House-Made Everything',
    description:
      'From house-pickled vegetables to our signature amber-honey aioli, every sauce, pickle, and spread is crafted in-house daily.',
  },
  {
    icon: Flame,
    title: 'Artisan Recipes',
    description:
      'No shortcuts, no pre-mixes. Our recipes are developed and refined in our kitchen — tested until every bite earns its place on the menu.',
  },
  {
    icon: Heart,
    title: 'Community First',
    description:
      'We source from local Kitchener-Waterloo farms and breweries, and our doors are always open for a good meal and a great conversation.',
  },
];

export default function Story() {
  return (
    <section id="story" className="relative py-24 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/34524218/pexels-photo-34524218.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">
              Our Story
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Born from a passion for
              <span className="text-amber-500"> real flavor.</span>
            </h2>
            <p className="mt-6 text-slate-300 text-lg leading-relaxed">
              The Lab Street Eats started with a simple idea: take the comfort
              food we grew up loving and craft it with the kind of obsession you
              usually only find in fine dining. We pickle our own vegetables,
              bake our bread fresh, and spend hours perfecting sauces that most
              places squeeze from a bottle.
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Tucked into the heart of downtown Kitchener, our eatery is a
              relaxed spot where friends, families, and solo diners all feel at
              home. Pull up a chair, grab a craft brew, and taste the difference
              that house-made makes.
            </p>

            <div className="mt-10 grid gap-5">
              {pillars.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">{title}</h3>
                    <p className="mt-1 text-slate-400 text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-64 border border-slate-700">
                  <img
                    src="https://images.pexels.com/photos/13658574/pexels-photo-13658574.jpeg?auto=compress&cs=tinysrgb&h=600&w=500"
                    alt="Craft burger with wedges"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-44 border border-slate-700">
                  <img
                    src="https://images.pexels.com/photos/13995291/pexels-photo-13995291.jpeg?auto=compress&cs=tinysrgb&h=400&w=500"
                    alt="Grilled artisan sandwiches"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden h-44 border border-slate-700">
                  <img
                    src="https://images.pexels.com/photos/19585045/pexels-photo-19585045.jpeg?auto=compress&cs=tinysrgb&h=400&w=500"
                    alt="Crispy chicken sandwich with coleslaw"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-64 border border-slate-700">
                  <img
                    src="https://images.pexels.com/photos/20535802/pexels-photo-20535802.jpeg?auto=compress&cs=tinysrgb&h=600&w=500"
                    alt="Loaded fries with cheese and bacon"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-amber-500 text-slate-950 rounded-2xl px-6 py-4 shadow-xl shadow-amber-500/20 hidden sm:block">
              <div className="text-3xl font-black leading-none">100%</div>
              <div className="text-xs font-bold uppercase tracking-wide mt-1">
                House-Made
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
