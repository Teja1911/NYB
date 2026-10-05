

function Header() {
  return (
    <header>
      <h1>My React Application</h1>
      <nav>
        <a href="#profile">Profile</a>{" "}
        <a href="#skills">Skills</a>{" "}
        <a href="#education">Education</a>
      </nav>
    </header>
  );
}

function Profile() {
  return (
    <section id="profile">
      <h2>Profile</h2>
      <p>Name: Tej</p>
      <p>Role: Frontend Developer</p>
      <p>I am learning React and Full Stack Development.</p>
    </section>
  );
}

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      <p>B.Tech - Computer Science Engineering</p>
      <p>2021 - 2025</p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2026 My React Application</p>
    </footer>
  );
}
function Reusable() {
  return (
     <>
      <Header />
      <Profile />
      <Skills />
      <Education />
      <Footer />
    </>
  )
}

export default Reusable