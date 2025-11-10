import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import Input from './Input';
import Textarea from './Textarea';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function FormContact() {
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('submitting');

    try {
      // Send email using EmailJS with sendForm
      await emailjs.sendForm(serviceId, templateId, form, publicKey);

      setStatus('success');
      form.reset();

      // Reset success message after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="container mb-8">
      <div className="flex items-end justify-center py-6">
        <h3 className="text-xl">Get In Touch</h3>
      </div>

      <div className="max-w-2xl mx-auto">
        <p className="text-neutral-400 mb-6 text-sm text-center">
          Have a project in mind?{' '}
          <span className="text-yellow-300">I'd love to hear about it.</span>{' '}
          Drop me a message and let's create something amazing.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Name"
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
          />

          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            required
          />

          <Textarea
            label="Message"
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            rows={5}
            required
          />

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full px-4 py-2.5 rounded-md text-sm font-medium bg-gradient-to-r from-yellow-400 to-cyan-400 text-neutral-900 hover:from-yellow-300 hover:to-cyan-300 transition-all ease-in duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <div className="p-3 border border-cyan-300/30 bg-cyan-300/10 text-cyan-300 rounded-md text-sm text-center">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {status === 'error' && (
            <div className="p-3 border border-red-400/30 bg-red-400/10 text-red-400 rounded-md text-sm text-center">
              Something went wrong. Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
