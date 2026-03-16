import Link from 'next/link';
import Nav from '../components/Nav';
import { posts } from '../../lib/posts';

export default function Blog() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col gap-16 py-32 px-16 bg-white dark:bg-black">
        <Nav />

        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50 mb-2">
            Blog
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400">Updates, stories, and more.</p>
        </div>

        <ul className="flex flex-col gap-10">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-zinc-100 dark:border-zinc-800 pb-10">
              <time className="text-sm text-zinc-400 dark:text-zinc-500">{post.date}</time>
              <h2 className="mt-1 text-xl font-semibold text-black dark:text-zinc-50">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-500 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400 leading-7">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-3 inline-block text-sm text-blue-500 hover:text-blue-700"
              >
                Read more →
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
