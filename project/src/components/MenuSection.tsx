import { useState } from 'react';
import { Leaf, Sprout, WheatOff, Plus } from 'lucide-react';
import { menuCategories, type DietaryTag } from '@/data/menu';

const filterOptions: { label: string; value: DietaryTag; icon: typeof Leaf }[] = [
  { label: 'Vegetarian', value: 'Vegetarian', icon: Leaf },
  { label: 'Vegan', value: 'Vegan', icon: Sprout },
  { label: 'Gluten-Free', value: 'Gluten-Free', icon: WheatOff },
];

const tagStyles: Record<DietaryTag, string> = {
  Vegetarian: 'bg-green-500/15 text-green-400 border-green-500/30',
  Vegan: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  'Gluten-Free': 'bg-sky-500/15 text-sky-400 border-sky-500/30',
};

interface MenuSectionProps {
  showOrder?: boolean;
}

export default function MenuSection({ showOrder = true }: MenuSectionProps) {
  const [activeFilters, setActiveFilters] = useState<Set<DietaryTag>>(new Set());

  const toggleFilter = (tag: DietaryTag) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const itemMatchesFilters = (tags: DietaryTag[]) => {
    if (activeFilters.size === 0) return true;
    return [...activeFilters].every((f) => tags.includes(f));
  };

  return (
    <section id="menu" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">
            What We Serve
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white tracking-tight">
            The Menu
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Every item is built from scratch with house-made ingredients and a
            relentless focus on flavor.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <span className="text-slate-500 text-sm font-medium mr-1">Filter:</span>
          {filterOptions.map(({ label, value, icon: Icon }) => {
            const active = activeFilters.has(value);
            return (
              <button
                key={value}
                onClick={() => toggleFilter(value)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-200 ${
                  active
                    ? 'bg-amber-500 border-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-amber-500/50 hover:text-amber-400'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            );
          })}
          {activeFilters.size > 0 && (
            <button
              onClick={() => setActiveFilters(new Set())}
              className="text-slate-500 hover:text-amber-400 text-sm font-medium underline underline-offset-4 ml-2 transition-colors"
            >
              Clear all
            </button>
          )}
        </div>

        <div className="space-y-20">
          {menuCategories.map((category) => {
            const visibleItems = category.items.filter((item) =>
              itemMatchesFilters(item.tags)
            );
            if (visibleItems.length === 0) return null;

            return (
              <div key={category.id}>
                <div className="mb-8 flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="mt-1.5 text-slate-400 text-sm">
                      {category.subtitle}
                    </p>
                  </div>
                  <div className="h-px flex-1 ml-6 bg-gradient-to-r from-slate-800 to-transparent" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {visibleItems.map((item) => (
                    <article
                      key={item.id}
                      className="group relative bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-1"
                    >
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                        {item.tags.length > 0 && (
                          <div className="absolute top-3 right-3 flex flex-col gap-1.5">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className={`text-[10px] font-bold px-2.5 py-1 rounded-full border backdrop-blur-sm ${tagStyles[tag]}`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <span className="absolute bottom-3 right-3 text-2xl font-black text-amber-500 bg-slate-950/80 backdrop-blur-sm px-3 py-1 rounded-lg">
                          {item.price}
                        </span>
                      </div>

                      <div className="p-5">
                        <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                          {item.name}
                        </h4>
                        <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                          {item.description}
                        </p>
                        {showOrder && (
                          <a
                            href="#order"
                            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                            Add to order
                          </a>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
