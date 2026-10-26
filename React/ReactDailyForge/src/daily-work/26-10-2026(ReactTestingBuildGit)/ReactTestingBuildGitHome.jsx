import { Link } from "react-router-dom";
import "./styles/testing-build-git.css";

export default function ReactTestingBuildGitHome() {
  return (
    <main className="testing-page">
      <header className="testing-header">
        <p className="testing-date">26 October 2026</p>

        <h1>React Testing, Build & Git</h1>

        <p>
          Practise testing React components, preparing production builds,
          and managing code with Git and GitHub.
        </p>
      </header>

      <section className="testing-grid">
        <article className="testing-card">
          <h2>1. Component Testing</h2>

          <p>
            Learn component rendering, props, state, user interactions,
            form validation, API mocking and error handling.
          </p>

          <Link to="/testing-build-git/testing">
            Open Testing Practice
          </Link>
        </article>

        <article className="testing-card">
          <h2>2. Production Build</h2>

          <p>
            Learn Vite builds, environment variables, build errors
            and deployment preparation.
          </p>

          <Link to="/testing-build-git/production-build">
            Open Build Guide
          </Link>
        </article>

        <article className="testing-card">
          <h2>3. Git & GitHub</h2>

          <p>
            Practise repository management, branches, commits,
            pushing code, pull requests and README documentation.
          </p>

          <Link to="/testing-build-git/git-practice">
            Open Git Guide
          </Link>
        </article>
      </section>

      <footer className="testing-footer">
        ReactDailyForge — Daily React Practice
      </footer>
    </main>
  );
}