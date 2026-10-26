export default function GitWorkflowGuide() {
  return (
    <main className="testing-page">
      <h1>Git & GitHub Workflow</h1>

      <section className="testing-card">
        <h2>1. Check your repository</h2>

        <pre>
          <code>git status</code>
        </pre>

        <p>
          Check which files have been changed and whether they are staged.
        </p>
      </section>

      <section className="testing-card">
        <h2>2. Create a feature branch</h2>

        <pre>
          <code>git switch -c feature/react-testing-build-git</code>
        </pre>

        <p>
          A feature branch allows you to work on this task without
          making changes directly on the main branch.
        </p>
      </section>

      <section className="testing-card">
        <h2>3. Stage your changes</h2>

        <pre>
          <code>git add .</code>
        </pre>

        <p>
          Stage the intended files for your next commit. Check the staged
          changes before committing.
        </p>
      </section>

      <section className="testing-card">
        <h2>4. Create a commit</h2>

        <pre>
          <code>
            {`git commit -m "Add React testing and build practice"`}
          </code>
        </pre>

        <p>
          A commit records a snapshot of your staged changes.
        </p>
      </section>

      <section className="testing-card">
        <h2>5. Push your branch</h2>

        <pre>
          <code>
            git push -u origin feature/react-testing-build-git
          </code>
        </pre>

        <p>
          This sends the branch to the configured remote repository.
        </p>
      </section>

      <section className="testing-card">
        <h2>6. Create a pull request</h2>

        <ol>
          <li>Open your repository on GitHub.</li>
          <li>Select the feature branch.</li>
          <li>Create a pull request into the intended base branch.</li>
          <li>Describe the changes and tests performed.</li>
          <li>Review the changes before merging.</li>
        </ol>
      </section>

      <section className="testing-card">
        <h2>Useful Git commands</h2>

        <pre>
          <code>
            {`git status
                git branch
                git switch main
                git pull
                git log --oneline
                git diff
                git diff --cached`
            }
          </code>
        </pre>
      </section>
    </main>
  );
}