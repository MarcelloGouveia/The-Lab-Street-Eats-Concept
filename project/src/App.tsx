import { Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import Story from '@/components/Story';
import Location from '@/components/Location';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function App() {
  const isMenuOnlyVersion = true;

  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <Navbar showOrder={!isMenuOnlyVersion} />
      <main>
        <Hero />
        <MenuSection showOrder={!isMenuOnlyVersion} />
        <Story />
        <Location />

        <section id="contact" className="py-24 bg-slate-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5">
                <Mail className="w-7 h-7 text-amber-500" />
              </div>
              <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">
                Get in Touch
              </span>
              <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white tracking-tight">
                Catering & Inquiries
              </h2>
              <p className="mt-4 text-slate-400 text-lg">
                Planning an event or have a question? Drop us a line — we'd love
                to hear from you.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>

        {!isMenuOnlyVersion && <div id="order" />}
      </main>
      <Footer />
    </div>
  );
}
