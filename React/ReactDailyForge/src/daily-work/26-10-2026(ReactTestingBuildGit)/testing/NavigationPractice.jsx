import { Link, Route, Routes } from "react-router-dom";

function NavigationHome() {
  return (
    <section>
      <h2>Navigation Home</h2>

      <Link to="/employees">View Employees</Link>
    </section>
  );
}

function NavigationEmployees() {
  return <h2>Employee Navigation Page</h2>;
}

export default function NavigationPractice() {
  return (
    <Routes>
      <Route path="/" element={<NavigationHome />} />

      <Route
        path="/employees"
        element={<NavigationEmployees />}
      />
    </Routes>
  );
}