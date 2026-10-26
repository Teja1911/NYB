export default function ProductionBuildGuide() {
  return (
    <main className="testing-page">
      <h1>Vite Production Build</h1>

      <section className="testing-card">
        <h2>1. Start the development server</h2>

        <pre>
          <code>npm run dev</code>
        </pre>

        <p>
          Use this command while developing and testing your application.
        </p>
      </section>

      <section className="testing-card">
        <h2>2. Run the tests</h2>

        <pre>
          <code>npm run test:run</code>
        </pre>

        <p>
          Run the automated tests before building the application.
        </p>
      </section>

      <section className="testing-card">
        <h2>3. Create the production build</h2>

        <pre>
          <code>npm run build</code>
        </pre>

        <p>
          Vite compiles the application and generates production files
          in the dist folder.
        </p>
      </section>

      <section className="testing-card">
        <h2>4. Preview the production build</h2>

        <pre>
          <code>npm run preview</code>
        </pre>

        <p>
          Use the preview server to check the generated production build
          locally before deployment.
        </p>
      </section>

      <section className="testing-card">
        <h2>5. Environment variables</h2>

        <p>
          Create a .env file in your project root when your application
          needs environment-specific configuration.
        </p>

        <pre>
          <code>VITE_API_BASE_URL=https://jsonplaceholder.typicode.com</code>
        </pre>

        <p>Read the variable in JavaScript:</p>

        <pre>
          <code>
            {`const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;`}
          </code>
        </pre>

        <p>
          Variables prefixed with VITE_ are exposed to client-side code.
          Never store passwords, private API keys or other secrets in them.
        </p>
      </section>

      <section className="testing-card">
        <h2>6. Common build problems</h2>

        <ul>
          <li>Incorrect import paths or missing files.</li>
          <li>Incorrect component or variable names.</li>
          <li>Missing npm packages.</li>
          <li>Incorrect environment variable names.</li>
          <li>Runtime errors that appear after the build completes.</li>
        </ul>
      </section>
    </main>
  );
}