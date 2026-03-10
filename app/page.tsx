'use client';

import Image from "next/image";
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log('Sign up email:', email);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex items-center gap-4">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <nav className="bg-white dark:bg-black p-4 shadow-md flex space-x-4 items-center">
            <ul className="flex space-x-4 justify-between items-center">
              <li>
                <Link href="/" className="text-blue-500 hover:text-blue-700">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-500 hover:text-blue-700">About</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Launching Soon!
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            We&apos;re excited to announce our new product! Sign up now to be one of the first to experience it.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="border border-zinc-300 dark:border-zinc-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-5 text-white transition-colors hover:bg-blue-600 dark:hover:bg-blue-400 md:w-[158px]">
            Sign Up
          </button>
        </form>
      </main>
    </div>
  );
}
