'use client';

import { useState } from 'react';
import Nav from '../components/Nav';

export default function Launch() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign up email:', email);
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
              className="border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50"
            />
            <button
              type="submit"
              className="h-10 px-6 rounded-full bg-blue-500 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
