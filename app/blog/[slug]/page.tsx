import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '../../components/Nav';
import Comments from '../../components/Comments';
import { posts, getPostBySlug } from '../../../lib/posts';

// Pre-generate a page for every post slug at build time
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col gap-16 py-32 px-16 bg-white dark:bg-black">
        <Nav />

        <article>
          <Link href="/blog" className="text-sm text-blue-500 hover:text-blue-700">
            ← Back to blog
          </Link>

          <time className="mt-6 block text-sm text-zinc-400 dark:text-zinc-500">{post.date}</time>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            {post.title}
          </h1>

          <div
            className="prose dark:prose-invert mt-8 max-w-none leading-8 text-zinc-600 dark:text-zinc-400"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <Comments slug={post.slug} />
        </article>
      </main>
    </div>
  );
}
