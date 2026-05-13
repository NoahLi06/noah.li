import { useEffect, useState } from "react";
import "./App.css";

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
    details: "Data & AI",
  },
  {
    role: "Software Developer Lead",
    company: "Data Science for Sustainable Development @ UW Madison",
    period: "Fall 2024 - Current",
    details: "Efficiency Navigator Map Project Manager for Sustain Dane",
  },
  {
    role: "Data Engineering Intern",
    company: "Komatsu",
    period: "Summer 2024",
    details: "Data Infrastructure",
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

  useEffect(() => {
    const sections = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("reveal-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.2 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`app-shell ${isDark ? "theme-dark" : ""}`}>
      <header className="site-header">
        <nav className="site-nav">
          <a href="#about" className="brand-link">
            Noah Li
          </a>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
            <li className="group relative">
              <a
                href="/Resume-Spring27-NL.pdf"
                className="nav-link"
                target="_blank"
                rel="noreferrer"
                title="Noah Li's Resume"
              >
                Resume
              </a>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setIsDark((prev) => !prev)}
                className="theme-toggle"
                aria-label={
                  isDark ? "Switch to light mode" : "Switch to dark mode"
                }
                title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2.5v2.25M12 19.25v2.25M4.75 4.75 6.34 6.34M17.66 17.66l1.59 1.59M2.5 12h2.25M19.25 12h2.25M4.75 19.25l1.59-1.59M17.66 6.34l1.59-1.59" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 13a8.5 8.5 0 1 1-10-10 7 7 0 0 0 10 10Z" />
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <section
          id="about"
          data-reveal
          className="reveal-section about-section"
        >
          <div className="space-y-4">
            <p className="section-kicker">Hey, I'm Noah!</p>
            <h1 className="section-title">Welcome to my webpage!</h1>
            <p className="body-text">
              I am a rising senior at UW Madison double majoring in Computer
              Science and Data Science. I am interested in Reinforcement
              Learning and Agentic AI.
            </p>
            <p className="body-text">
              Outside of academics, I LOVE the outdoors and exploring new
              places. I'm a big fan of hiking, traveling, and eating. Tennis and
              Basketball are my favorite sports to play. Soccer is the favorite
              sport to watch (FC Barcelona & Pedri fanboy)
            </p>
            <div className="action-row">
              <a
                href="https://github.com/NoahLi06"
                className="btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/noahsli/"
                className="btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href="#projects" className="btn-outline">
                See Projects
              </a>
            </div>
          </div>

          <div className="profile-frame">
            <img
              src="/nl-heat.jpg"
              alt="Portrait of Me"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section
          id="experience"
          data-reveal
          className="reveal-section experience-section"
        >
          <p className="section-kicker">Experience</p>
          <div className="experience-grid">
            {experiences.map((item) => (
              <article key={item.role} className="content-card">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="card-heading">{item.role}</h3>
                  <span className="card-meta">{item.period}</span>
                </div>
                <p className="text-sm font-medium text-amber-800">
                  {item.company}
                </p>
                <p className="card-text">{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="projects"
          data-reveal
          className="reveal-section projects-section"
        >
          <p className="section-kicker">Projects</p>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="content-card">
                <h3 className="card-heading">{project.title}</h3>
                <p className="card-text">{project.description}</p>
                <p className="stack-text">{project.stack}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
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
          data-reveal
          className="reveal-section fun-facts-section"
        >
          <p className="section-kicker">Fun Facts</p>
          <ul className="fun-facts-list">
            <li className="content-card">I have a 10-year cat named Samwise</li>
            <li className="content-card">
              I'm a major foodie. Follow me on my beli @noahtotheli
            </li>
            <li className="content-card">Chipotle Corn Salsa is my go-to</li>
            <li className="content-card">
              Am a washed formerly 6 UTR tennis player
            </li>
          </ul>
        </section>
      </main>

      <footer className="footer-shell">
        <div className="footer-content">
          <p className="footer-text">Connect with me</p>
          <div className="social-row">
            <a
              href="https://github.com/NoahLi06"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="social-icon"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.37-2.22-.26-4.55-1.15-4.55-5.12 0-1.13.39-2.05 1.04-2.78-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.49.35 1.9-1.34 2.74-1.06 2.74-1.06.55 1.42.2 2.47.1 2.73.64.73 1.04 1.65 1.04 2.78 0 3.98-2.34 4.85-4.57 5.11.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .28.18.61.69.5A10.27 10.27 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/noahsli/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                aria-hidden="true"
              >
                <path d="M6.94 8.5a1.72 1.72 0 1 0 0-3.44 1.72 1.72 0 0 0 0 3.44ZM5.5 9.75h2.87V19H5.5V9.75Zm4.62 0h2.75v1.26h.04c.38-.72 1.32-1.49 2.72-1.49 2.91 0 3.45 1.95 3.45 4.48V19H16.2v-4.42c0-1.05-.02-2.4-1.43-2.4-1.44 0-1.66 1.15-1.66 2.33V19h-2.99V9.75Z" />
              </svg>
            </a>
            <a
              href="mailto:noah.jialiang@gmail.com"
              aria-label="Email"
              className="social-icon"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                aria-hidden="true"
              >
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
