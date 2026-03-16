import Nav from '../../components/Nav';

const sections = [
  {
    title: 'Overview',
    body: 'Product #2 is a placeholder for your second demo product. Replace this section with a high-level description of what the product does, who it is for, and the core problem it solves.',
  },
  {
    title: 'Key Features',
    body: 'List the standout features of your product here. Each feature should communicate clear value to the user — what it does and why it matters.',
  },
  {
    title: 'How It Works',
    body: 'Walk through the core flow of the product. This could be a step-by-step explanation, a diagram description, or a narrative of the user journey from start to finish.',
  },
  {
    title: 'Get Started',
    body: 'Provide onboarding instructions, a call to action, or a sign-up prompt here. Help the user take the next step with minimal friction.',
  },
];

export default function ProductTwo() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans">
      <div className="max-w-3xl mx-auto px-8 pb-24">
        <Nav />

        <section className="mt-14 mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Product #2
          </h1>
          <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400 max-w-xl">
            A placeholder for your second product. Add your own title, description, and content to this page.
          </p>
        </section>

        <div className="flex flex-col gap-5">
          {sections.map(({ title, body }) => (
            <div
              key={title}
              className="rounded-md bg-slate-800 p-6 shadow-none hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-shadow duration-300 cursor-default"
            >
              <h2 className="text-base font-semibold text-zinc-50 mb-2">{title}</h2>
              <p className="text-sm text-slate-300 leading-7">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
