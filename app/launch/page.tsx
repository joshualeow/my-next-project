'use client';

import { useState } from 'react';
import Nav from '../components/Nav';

export default function Launch() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'duplicate'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus('success');
      setEmail('');
    } else if (res.status === 409) {
      setStatus('duplicate');
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans">
      <div className="max-w-3xl mx-auto px-8 pb-24">
        <Nav />
        <section className="mt-24 flex flex-col gap-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Launching Soon!
            </h1>
            <p className="mt-4 text-lg leading-8 text-zinc-500 dark:text-zinc-400 max-w-md">
              We&apos;re excited to announce our new product! Sign up now to be one of the first to experience it.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={status === 'loading' || status === 'success'}
              className="border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="h-10 px-6 rounded-full bg-blue-500 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Signing up...' : 'Sign Up'}
            </button>
          </form>
          {status === 'success' && (
            <div className="rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 px-4 py-3">
              <p className="text-sm font-medium text-green-700 dark:text-green-300">You&apos;re on the list! We&apos;ll be in touch soon.</p>
            </div>
          )}
          {status === 'duplicate' && (
            <div className="rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 px-4 py-3">
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">You&apos;re already signed up!</p>
            </div>
          )}
          {status === 'error' && (
            <div className="rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 px-4 py-3">
              <p className="text-sm font-medium text-red-700 dark:text-red-300">Something went wrong. Please try again.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
