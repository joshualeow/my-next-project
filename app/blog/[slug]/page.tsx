import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '../../components/Nav';
import Comments from '../../components/Comments';
import { posts, getPostBySlug } from '../../../lib/posts';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans">
      <div className="max-w-3xl mx-auto px-8 pb-24">
        <Nav />

        <article className="mt-14">
          <Link href="/blog" className="text-sm text-zinc-400 hover:text-blue-500 transition-colors duration-200">
            ← Back to blog
          </Link>

          <time className="mt-6 block text-sm text-zinc-400 dark:text-zinc-500">{post.date}</time>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {post.title}
          </h1>

          <div
            className="prose dark:prose-invert mt-8 max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <Comments slug={post.slug} />
        </article>
      </div>
    </div>
  );
}
