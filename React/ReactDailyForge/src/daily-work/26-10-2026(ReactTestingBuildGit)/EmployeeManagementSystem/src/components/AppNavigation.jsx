import { NavLink } from "react-router-dom";

function AppNavigation() {
  return (
    <nav className="app-navigation" aria-label="Main navigation">
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "app-nav-link active" : "app-nav-link"
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/employees"
        className={({ isActive }) =>
          isActive ? "app-nav-link active" : "app-nav-link"
        }
      >
        Employee Directory
      </NavLink>
    </nav>
  );
}

export default AppNavigation;