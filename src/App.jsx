import { useState } from "react";

const navLinks = [
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "fun-facts", label: "Fun Facts" },
  { id: "projects", label: "Projects" },
];

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Caterpillar",
    period: "Summer 2025 - Current",
    details: "Data & AI Helios Team",
  },
  {
    role: "Data Engineering Intern",
    company: "Komatsu",
    period: "Summer 2024",
    details:
      "Standardized over 15,000 material specifications using Excel-based automation to streamline operations across all engineering teams while implementing comprehensive data validation and quality checks to ensure accuracy and accessibility.",
  },
];

const projects = [
  {
    title: "Efficiency Navigator Map",
    description:
      "Done alongside Sustain Dane, a non-profit organization dedicated to sustainability and combatting climate change in Madison, WI. The Efficiency Navigator Map is a tool that helps users see if their building can benefit from their program, making housing more efficient and resilient.",
    stack: "React, Tailwind CSS, Vite, Leaflet API",
    link: "https://sustain-dane.vercel.app/",
  },
  {
    title: "Pokoupon",
    description:
      "Want to make even more money from cashback and points? Try Pokoupon! Using a game-like interface, users load in credit cards they use and the app calculates which card can give them the most money back.",
    stack: "JavaScript, Tailwind CSS, HTML",
    link: "https://noahli06.github.io/Pokoupon/",
  },
  {
    title: "MadGym",
    description:
      "Are you a UW Madison student looking to get a workout in without the hassle of waiting in line? MadGym is for you!",
    stack: "React, Tailwind CSS, HTML",
    link: "https://noahli06.github.io/MadGym/",
  },
];

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? "dark bg-stone-900 text-stone-100" : "bg-stone-100 text-stone-800"}`}
    >
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-100/95 backdrop-blur dark:border-stone-700 dark:bg-stone-900/95">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#about"
            className="text-lg font-semibold tracking-tight text-stone-900 dark:text-stone-100"
          >
            Noah Li
          </a>
          <ul className="flex flex-wrap items-center gap-2 text-sm sm:gap-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="rounded-full px-3 py-2 text-stone-700 transition hover:bg-amber-100 hover:text-stone-900 dark:text-stone-200 dark:hover:bg-stone-700 dark:hover:text-stone-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="group relative">
              <a
                href="/Resume-Spring27-NL.pdf"
                className="rounded-full px-3 py-2 text-stone-700 transition hover:bg-amber-100 hover:text-stone-900 dark:text-stone-200 dark:hover:bg-stone-700 dark:hover:text-stone-100"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
              <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-max -translate-x-1/2 whitespace-nowrap rounded-md bg-stone-800 px-2 py-1 text-xs text-stone-100 opacity-0 shadow transition group-hover:opacity-100 dark:bg-stone-700">
                takes you to a new tab
              </span>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setIsDark((prev) => !prev)}
                className="rounded-full border border-stone-300 px-3 py-2 text-stone-700 transition hover:bg-amber-100 hover:text-stone-900 dark:border-stone-600 dark:text-stone-200 dark:hover:bg-stone-700 dark:hover:text-stone-100"
                aria-label="Toggle color theme"
              >
                {isDark ? "Light" : "Dark"}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 sm:py-14">
        <section
          id="about"
          className="grid scroll-mt-24 gap-6 rounded-2xl border border-stone-200 bg-amber-50 p-6 shadow-sm sm:grid-cols-[1.1fr_0.9fr] dark:border-stone-700 dark:bg-stone-800"
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
              About Me
            </p>
            <h1 className="text-3xl font-semibold text-stone-900 sm:text-4xl dark:text-stone-100">
              Welcome to my page!
            </h1>
            <p className="max-w-2xl leading-relaxed text-stone-700 dark:text-stone-300">
              I am a rising senior at UW Madison double majoring in Computer
              Science and Data Science. I am interested in Reinforcement
              Learning and Agentic AI.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/NoahLi06"
                className="rounded-full bg-stone-800 px-4 py-2 text-sm font-medium text-stone-50 transition hover:bg-stone-700"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/noahsli/"
                className="rounded-full bg-stone-700 px-4 py-2 text-sm font-medium text-stone-50 transition hover:bg-stone-600"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="#projects"
                className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-200 dark:border-stone-600 dark:text-stone-200 dark:hover:bg-stone-700"
              >
                See Projects
              </a>
            </div>
          </div>

          <div className="mx-auto aspect-square w-60 overflow-hidden rounded-full border border-stone-200 bg-stone-200 sm:w-72 dark:border-stone-600 dark:bg-stone-700">
            <img
              src="/NLphoto-SF.jpg"
              alt="Portrait of Noah Li"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section
          id="experience"
          className="scroll-mt-24 rounded-2xl border border-stone-200 bg-stone-50 p-6 shadow-sm dark:border-stone-700 dark:bg-stone-800"
        >
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
            Experience
          </p>
          <div className="mt-5 grid gap-4">
            {experiences.map((item) => (
              <article
                key={item.role}
                className="rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                    {item.role}
                  </h3>
                  <span className="text-sm text-stone-500 dark:text-stone-400">{item.period}</span>
                </div>
                <p className="text-sm font-medium text-amber-800">
                  {item.company}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
                  {item.details}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="scroll-mt-24 rounded-2xl border border-stone-200 bg-stone-50 p-6 shadow-sm dark:border-stone-700 dark:bg-stone-800"
        >
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
            Projects
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900"
              >
                <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
                  {project.description}
                </p>
                <p className="mt-3 text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  {project.stack}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block rounded-full bg-stone-800 px-3 py-1.5 text-xs font-medium text-stone-50 transition hover:bg-stone-700"
                  >
                    Open Project
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section
          id="fun-facts"
          className="scroll-mt-24 rounded-2xl border border-stone-200 bg-orange-50 p-6 shadow-sm dark:border-stone-700 dark:bg-stone-800"
        >
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
            Fun Facts
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            <li className="rounded-xl border border-amber-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
              I have a 10-year cat named Samwise
            </li>
            <li className="rounded-xl border border-amber-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
              I'm a major foodie. Follow me on my beli @noahtotheli
            </li>
            <li className="rounded-xl border border-amber-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
              Chipotle Corn Salsa is my go-to
            </li>
            <li className="rounded-xl border border-amber-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
              Am a washed formerly 6 UTR tennis player
            </li>
          </ul>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-stone-50 dark:border-stone-700 dark:bg-stone-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <p className="text-sm text-stone-500 dark:text-stone-400">Connect with me</p>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/NoahLi06"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-stone-300 bg-white p-2 text-stone-700 transition hover:bg-amber-100 hover:text-stone-900 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700 dark:hover:text-stone-100"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.37-2.22-.26-4.55-1.15-4.55-5.12 0-1.13.39-2.05 1.04-2.78-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.49.35 1.9-1.34 2.74-1.06 2.74-1.06.55 1.42.2 2.47.1 2.73.64.73 1.04 1.65 1.04 2.78 0 3.98-2.34 4.85-4.57 5.11.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .28.18.61.69.5A10.27 10.27 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/noahsli/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-stone-300 bg-white p-2 text-stone-700 transition hover:bg-amber-100 hover:text-stone-900 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700 dark:hover:text-stone-100"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M6.94 8.5a1.72 1.72 0 1 0 0-3.44 1.72 1.72 0 0 0 0 3.44ZM5.5 9.75h2.87V19H5.5V9.75Zm4.62 0h2.75v1.26h.04c.38-.72 1.32-1.49 2.72-1.49 2.91 0 3.45 1.95 3.45 4.48V19H16.2v-4.42c0-1.05-.02-2.4-1.43-2.4-1.44 0-1.66 1.15-1.66 2.33V19h-2.99V9.75Z" />
              </svg>
            </a>
            <a
              href="mailto:noah.jialiang@gmail.com"
              aria-label="Email"
              className="rounded-full border border-stone-300 bg-white p-2 text-stone-700 transition hover:bg-amber-100 hover:text-stone-900 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700 dark:hover:text-stone-100"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.29-.9a1.25 1.25 0 0 0-.79 1.16v.15l7.1 4.67a.75.75 0 0 0 .82 0l7.1-4.67v-.15a1.25 1.25 0 0 0-1.25-1.25H5.75c-.17 0-.33.03-.46.09Zm14.23 3.08-6.28 4.13a2.25 2.25 0 0 1-2.48 0L4.48 8.93v8.32c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V8.93Z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
