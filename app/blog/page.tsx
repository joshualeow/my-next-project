import Link from 'next/link';
import Nav from '../components/Nav';
import { posts } from '../../lib/posts';

export default function Blog() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans">
      <div className="max-w-3xl mx-auto px-8 pb-24">
        <Nav />

        <section className="mt-14 mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Blog</h1>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">Updates, stories, and more.</p>
        </section>

        <ul className="flex flex-col gap-10">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-zinc-100 dark:border-zinc-800 pb-10">
              <time className="text-sm text-zinc-400 dark:text-zinc-500">{post.date}</time>
              <h2 className="mt-1 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-500 transition-colors duration-200">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-zinc-500 dark:text-zinc-400 leading-7">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-3 inline-block text-sm text-blue-500 hover:text-blue-600 transition-colors duration-200"
              >
                Read more →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
