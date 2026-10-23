
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AppLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  return (
    <>
      <header className="app-header">
        <strong>Employee Portal</strong>

        <nav>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/employees">Employees</NavLink>
          <NavLink to="/performance">Performance</NavLink>
        </nav>

        <span>{user?.username}</span>
        <button onClick={handleLogout}>Logout</button>
      </header>

      <main className="page-content">
        <Outlet />
      </main>
    </>
  );
}
