'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <nav className="bg-white dark:bg-black p-4 shadow-md w-full top-bar">
        <ul className="flex space-x-4 justify-between items-center">
          <li>
            <Link href="/" className="text-blue-500 hover:text-blue-700">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-500 hover:text-blue-700">About</Link>
          </li>
        </ul>
      </nav>
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
            About Us
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This is a placeholder for the about page content.
          </p>
        </div>
      </main>
    </div>
  );
}
