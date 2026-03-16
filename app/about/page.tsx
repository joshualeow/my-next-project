import Nav from '../components/Nav';

const skills = {
  'Programming Languages': 'JavaScript (TypeScript), Python, Java, C# (.NET), C++',
  'Frontend': 'React, D3.js, OpenIDX Java (Android), HTML/CSS, Vite, SPAs',
  'Backend': 'ASP.NET MVC, Spring MVC, Express.js, ST54, JDBC, JPA',
  'Machine Learning & AI': 'TensorFlow, Keras, MongoDB, NumPy, Pandas, Matplotlib, Seaborn, CNN, MLflow',
  'Dev Tools & Practices': 'Git, Agile/Scrum, UI/UX Design, Sequence Diagrams, Class Diagrams, ERD',
  'CS Fundamentals': 'Data Structures, Algorithms, Software Engineering, Distributed Systems',
};

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans">
      <div className="max-w-3xl mx-auto px-8 pb-24">
        <Nav />

        {/* Hero */}
        <section className="mt-14 mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Leow Zhi Hao, Joshua
          </h1>
          <p className="mt-2 text-lg text-zinc-500 dark:text-zinc-400">Software Engineer</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
            <a href="tel:+6596782245" className="hover:text-blue-500 transition-colors duration-200">+65 9678 2245</a>
            <a href="mailto:joshualeowzhihao@gmail.com" className="hover:text-blue-500 transition-colors duration-200">joshualeowzhihao@gmail.com</a>
            <a href="https://www.linkedin.com/in/joshualeow" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-200">LinkedIn</a>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-4">Professional Summary</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-7">
            Software engineer with experience building high-performance Single Page Applications using React (TypeScript),
            modern JavaScript (ES2020+), and RESTful API integration. Proven track record of optimising application
            performance, implementing complex features, troubleshooting and delivering high-quality code in agile
            environments. Passionate about solving challenging technical problems and building user-centric solutions.
            A fast learner who rapidly adapts to new technologies and frameworks.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-4">Technical Skills</h2>
          <dl className="flex flex-col gap-3">
            {Object.entries(skills).map(([category, list]) => (
              <div key={category} className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 sm:w-52 shrink-0">{category}</dt>
                <dd className="text-sm text-zinc-500 dark:text-zinc-400 leading-6">{list}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-6">Experience</h2>
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">Project / Software Engineer</h3>
                <span className="text-sm text-zinc-400 shrink-0">Aug 2023 – Present</span>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">ST Engineering Mission Software & Services Pte Ltd</p>
              <ul className="flex flex-col gap-2">
                {[
                  'Built frontend for production applications featuring complex interactive data visualisations and analytical dashboards, integrating with backend REST APIs for real-time data processing.',
                  'Optimised memory usage and resolved frontend memory leaks, improving stability on a Chromium-based framework.',
                  'Collaborated with stakeholders to prioritise features and align UI/UX designs with user requirements.',
                  'Created comprehensive technical documentation including UI wireframes, sequence diagrams, and class diagrams.',
                  'Delivered requirements in a forward-deployed, behaviour-driven development environment.',
                ].map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400 leading-6">
                    <span className="mt-2 h-1 w-1 rounded-full bg-blue-400 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">Robotic Process Automation (RPA) Intern</h3>
                <span className="text-sm text-zinc-400 shrink-0">Mar 2022 – Jul 2022</span>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">Total Agile Solutions Pte Ltd</p>
              <ul className="flex flex-col gap-2">
                {[
                  'Developed automated UiPath email workflow with input validation and Excel data processing to streamline business operations.',
                  'Created technical documentation including Solution Design Document (SDD) and Process Design Document (PDD) for automation workflows.',
                ].map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400 leading-6">
                    <span className="mt-2 h-1 w-1 rounded-full bg-blue-400 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-6">Education</h2>
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">Graduate Diploma in Systems Analysis</h3>
                <span className="text-sm text-zinc-400 shrink-0">Aug 2021 – Aug 2022</span>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Institute of System Science, National University of Singapore</p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-6">
                C# (.NET, ASP.NET MVC), Java (Spring MVC, JDBC, JPA), JavaScript (React), Android (OpenIDX Java),
                Python (NumPy, Pandas, Matplotlib, Seaborn), MongoDB. Comprehensive training in algorithms, data
                structures, OOP, SDLC, and database design.
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">BSc Business Management with Communications</h3>
                <span className="text-sm text-zinc-400 shrink-0">Jul 2016 – Apr 2018</span>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">University of Birmingham</p>
              <p className="mt-1 text-sm text-zinc-500">Honours, Second Upper Division (2:1)</p>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-6">Courses & Certificates</h2>
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">Full-stack Development with AI</h3>
                <span className="text-sm text-zinc-400 shrink-0">Jun 2025 – Dec 2025</span>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">School of Computing, National University of Singapore</p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-6">
                Express.js, Flask, React, MongoDB, TensorFlow, Keras (LSTM RNN), MLflow. Achieved 98.33% on weekly assignments and capstone.
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">IBM Data Science Associate Professional Certificate</h3>
                <span className="text-sm text-zinc-400 shrink-0">May – Jun 2021</span>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">IBM</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
