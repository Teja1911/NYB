import './style.css'
function Header() {
  return (
    <header>
      <h1>Tej</h1>
      <p>Frontend Developer</p>

      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
      </nav>
    </header>
  );
}

function Profile() {
  return (
    <section id="about" className="card">
      <h2>About Me</h2>
      <p>
        I am a Frontend Developer interested in building responsive
        and user-friendly web applications.
      </p>
    </section>
  );
}

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <section id="skills" className="card">
      <h2>Skills</h2>

      <div className="skills">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="card">
      <h2>Education</h2>
      <h3>B.Tech - CSE</h3>
      <p>Malla Reddy University</p>
      <p>2021 - 2025</p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2026 Tej | React Profile</p>
    </footer>
  );
}

function MiniAssessment() {
  return (
    <div className="container">
      <Header />
      <main>
        <Profile />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  )
}

export default MiniAssessment