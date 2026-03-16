export type Post = {
  slug: string;       // URL-safe identifier, e.g. 'hello-world'
  title: string;
  date: string;       // ISO format: 'YYYY-MM-DD'
  excerpt: string;    // Short summary shown on the blog listing page
  content: string;    // Full post content — plain text or HTML
};

// ─────────────────────────────────────────────
// ADD NEW POSTS HERE
// Copy the object below and fill in your content.
// The newest post should be first.
// ─────────────────────────────────────────────
export const posts: Post[] = [
  {
    slug: 'hello-world',
    title: 'Hello, World!',
    date: '2026-03-16',
    excerpt: 'Welcome to my blog. This is where I share updates, thoughts, and behind-the-scenes looks at what we are building.',
    content: `
      <p>Welcome to the blog!</p>

      <p>This is our first post, and we're excited to start sharing more about the journey of building this product.
      Expect updates on new features, the occasional deep-dive into how things work under the hood, and honest
      reflections on what it's like to launch something new.</p>

      <h2>What to expect</h2>
      <ul>
        <li>Product updates and release notes</li>
        <li>Behind-the-scenes stories from the team</li>
        <li>Tips and tutorials related to what we're building</li>
      </ul>

      <p>Feel free to leave a comment below — we'd love to hear from you.</p>
    `,
  },

  // ─── TEMPLATE — uncomment and fill in to add a new post ───
  // {
  //   slug: 'your-post-slug',          // becomes /blog/your-post-slug
  //   title: 'Your Post Title',
  //   date: '2026-03-17',
  //   excerpt: 'A short description shown on the blog listing page.',
  //   content: `
  //     <p>Your post content goes here. You can use HTML tags like
  //     <strong>bold</strong>, <em>italic</em>, <a href="#">links</a>, etc.</p>
  //
  //     <h2>A section heading</h2>
  //     <p>More content...</p>
  //   `,
  // },
];

// Helper — find a single post by slug (used by the [slug] page)
export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
