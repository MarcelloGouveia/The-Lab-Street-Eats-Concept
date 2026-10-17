import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const subjects = [
  'Catering',
  'General Question',
  'Feedback',
  'Other',
] as const;

// ⚠️ REPLACE THIS WITH YOUR ACCESS KEY FROM WEB3FORMS.COM
const WEB3FORMS_ACCESS_KEY = '794e1fed-061f-4401-890a-9d19ca1046a1';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState<string>('Catering');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          email,
          phone: phone || 'Not provided',
          subject: `[The Lab Street Eats] ${subject}`,
          message,
          from_name: 'The Lab Street Eats Website',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setPhone('');
        setSubject('Catering');
        setMessage('');
      } else {
        setStatus('error');
        setErrorMsg(
          result.message ||
            'Something went wrong while sending your message. Please try again or call us at (519) 603-5508.'
        );
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMsg(
        'A network error occurred. Please try again or call us directly at (519) 603-5508.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-slate-900 rounded-2xl border border-green-500/20 p-8 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-5">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-white">Message Sent!</h3>
        <p className="mt-2 text-slate-400">
          Thanks for reaching out. We'll get back to you within 1–2 business days.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-amber-500 hover:text-amber-400 font-semibold text-sm transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all duration-200';

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8">
      {status === 'error' && (
        <div className="mb-5 flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <p className="text-red-300 text-sm">{errorMsg}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-slate-300 mb-2"
            >
              Name <span className="text-amber-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-slate-300 mb-2"
            >
              Email <span className="text-amber-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-slate-300 mb-2"
            >
              Phone <span className="text-slate-600 font-normal">(optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={inputClass}
              placeholder="(519) 000-0000"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-slate-300 mb-2"
            >
              Subject
            </label>
            <select
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={inputClass}
            >
              {subjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-slate-300 mb-2"
          >
            Message <span className="text-amber-500">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputClass} resize-none`}
            placeholder="Tell us about your catering needs or any questions you have..."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 disabled:bg-slate-700 disabled:cursor-not-allowed text-slate-950 font-bold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
