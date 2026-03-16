'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/launch', label: 'Launch' },
];

const demoLinks = [
  { href: '/', label: 'Product #1' },
  { href: '/demo/product-2', label: 'Product #2' },
];

export default function Nav() {
  const pathname = usePathname();
  const [demoOpen, setDemoOpen] = useState(false);

  const isDemoActive = pathname === '/' || pathname.startsWith('/demo');

  return (
    <nav className="w-full flex items-center justify-between py-6 border-b border-zinc-100 dark:border-zinc-800">
      <Link
        href="/"
        className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 transition-colors duration-200 hover:text-blue-500"
      >
        Joshua Leow
      </Link>

      <ul className="flex items-center gap-8">
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`relative text-sm font-medium transition-colors duration-200 group ${
                  isActive
                    ? 'text-blue-500'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-blue-500 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
          );
        })}

        {/* Demo dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setDemoOpen(true)}
          onMouseLeave={() => setDemoOpen(false)}
        >
          <button
            className={`relative flex items-center gap-1 text-sm font-medium transition-colors duration-200 group ${
              isDemoActive
                ? 'text-blue-500'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
            }`}
          >
            Demo
            <svg
              className={`h-3 w-3 transition-transform duration-200 ${demoOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <span
              className={`absolute -bottom-1 left-0 h-px bg-blue-500 transition-all duration-300 ${
                isDemoActive ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </button>

          {/* Dropdown */}
          <div
            className={`absolute right-0 top-full mt-2 w-36 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg py-1 transition-all duration-200 ${
              demoOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
            }`}
          >
            {demoLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block px-4 py-2 text-sm transition-colors duration-150 ${
                  pathname === href
                    ? 'text-blue-500 bg-blue-50 dark:bg-blue-950/30'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-800'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </li>
      </ul>
    </nav>
  );
}
