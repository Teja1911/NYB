import Greeting from "./Greeting";
import Counter from "./Counter";
import LoginForm from "./LoginForm";
import EmployeeList from "./EmployeeList";

export default function TestingPractice() {
  return (
    <main className="testing-page">
      <header className="testing-header">
        <h1>React Testing Practice</h1>

        <p>
          Explore reusable components, state, forms, validation
          and API loading states.
        </p>
      </header>

      <section className="testing-card">
        <Greeting name="Ravi" />
      </section>

      <section className="testing-card">
        <Counter />
      </section>

      <section className="testing-card">
        <LoginForm
          onLogin={(formData) => {
            console.log("Practice form submitted:", formData);
          }}
        />
      </section>

      <section className="testing-card">
        <EmployeeList />
      </section>
    </main>
  );
}