import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  return (
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
            <Link href="/" className="text-blue-500 hover:text-blue-700">About</Link>
          </li>
          <li>
            <Link href="/blog" className="text-blue-500 hover:text-blue-700">Blog</Link>
          </li>
          <li>
            <Link href="/launch" className="text-blue-500 hover:text-blue-700">Launch</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
