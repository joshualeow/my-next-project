'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/launch', label: 'Launch' },
];

export default function Nav() {
  const pathname = usePathname();

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
      </ul>
    </nav>
  );
}
