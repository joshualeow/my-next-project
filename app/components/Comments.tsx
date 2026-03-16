'use client';

import { useEffect, useRef } from 'react';

// To activate comments:
// 1. Go to https://giscus.app
// 2. Enter your GitHub repo (must be public)
// 3. Enable GitHub Discussions on the repo (Settings → Features → Discussions)
// 4. Replace the placeholder values below with the values from giscus.app



const GISCUS_REPO = 'joshualeow/my-next-project'; // e.g. 'joshualeow/my-next-project'
const GISCUS_REPO_ID = 'YR_kgDORokgSw';                     // from giscus.app
const GISCUS_CATEGORY = 'Announcements';
const GISCUS_CATEGORY_ID = 'DIC_kwDORokgS84C4heb';             // from giscus.app

export default function Comments({ slug }: { slug: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', GISCUS_REPO);
    script.setAttribute('data-repo-id', GISCUS_REPO_ID);
    script.setAttribute('data-category', GISCUS_CATEGORY);
    script.setAttribute('data-category-id', GISCUS_CATEGORY_ID);
    script.setAttribute('data-mapping', 'specific');
    script.setAttribute('data-term', slug);
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', 'en');
    script.crossOrigin = 'anonymous';
    script.async = true;
    ref.current.appendChild(script);
  }, [slug]);

  return (
    <div className="mt-12 border-t border-zinc-200 dark:border-zinc-700 pt-8">
      <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4">Comments</h2>
      <div ref={ref} />
    </div>
  );
}
