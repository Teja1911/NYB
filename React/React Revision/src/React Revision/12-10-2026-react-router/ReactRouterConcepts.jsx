
import { useState } from "react";
import {
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
  useNavigate,
  useSearchParams,
  Outlet,
  Navigate,
} from "react-router-dom";

const BASE = "/ReactRouterConcepts";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";

  return (
    <section>
      <h2>Home</h2>
      <p>Selected category: {category}</p>

      <button
        onClick={() =>
          setSearchParams({ category: "technology" })
        }
      >
        Show Technology
      </button>
    </section>
  );
}

function Products() {
  return (
    <section>
      <h2>Products</h2>
      <p>Choose a product to view its details.</p>

      <Link to="101">View Product 101</Link>
      {" | "}
      <Link to="102">View Product 102</Link>
    </section>
  );
}

function ProductDetails() {
  const { productId } = useParams();

  return (
    <section>
      <h2>Product Details: {productId}</h2>
      <Link to="/ReactRouterConcepts/products">
        Back to Products
      </Link>
    </section>
  );
}

function Contact() {
  const navigate = useNavigate();

  return (
    <section>
      <h2>Contact</h2>
      <button onClick={() => navigate(BASE)}>
        Go Home
      </button>
    </section>
  );
}

function DashboardLayout({ onLogout }) {
  return (
    <section>
      <h2>Dashboard Layout</h2>

      <nav className="dashboard-nav" style={{background:"black",gap:20,padding:20}}>
        <Link to="/ReactRouterConcepts/dashboard">
          Overview
        </Link>
        {" | "}
        <Link to="/ReactRouterConcepts/dashboard/reports">
          Reports
        </Link>
        {" | "}
        <button onClick={onLogout}>Logout</button>
      </nav>

      <Outlet />
    </section>
  );
}

function DashboardHome() {
  return <p>Dashboard Overview Page.</p>;
}

function Reports() {
  return <p>Reports page inside the dashboard layout.</p>;
}

function Login({ loggedIn, setLoggedIn }) {
  const navigate = useNavigate();

  function handleLogin() {
    setLoggedIn(true);
    navigate(`${BASE}/dashboard`, { replace: true });
  }

  if (loggedIn) {
    return <Navigate to={`${BASE}/dashboard`} replace />;
  }

  return (
    <section>
      <h2>Mock Login</h2>
      <p>Click the button to simulate signing in.</p>
      <button onClick={handleLogin}>Sign In</button>
    </section>
  );
}

function ProtectedRoute({ loggedIn, onLogout }) {
  if (!loggedIn) {
    return <Navigate to={`${BASE}/login`} replace />;
  }

  return <DashboardLayout onLogout={onLogout} />;
}

function NotFound() {
  return (
    <section>
      <h2>404 - Page Not Found</h2>
      <Link to={BASE}>Return Home</Link>
    </section>
  );
}

function Navigation({ loggedIn }) {
  return (
    <nav className="main-nav" style={{background:"black",gap:20,padding:20}}>
      <NavLink to={BASE} end>Home</NavLink>
      <NavLink to={`${BASE}/products`}>Products</NavLink>
      <NavLink to={`${BASE}/contact`}>Contact</NavLink>
      <NavLink to={`${BASE}/login`}>Login</NavLink>

      {loggedIn && (
        <NavLink to={`${BASE}/dashboard`}>Dashboard</NavLink>
      )}
    </nav>
  );
}

function RouteExamples() {
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogout() {
    setLoggedIn(false);
  }

  return (
    <>
      <Navigation loggedIn={loggedIn} />

      <Routes>
        {/* Home page */}
        <Route index element={<Home />} />

        {/* Products */}
        <Route path="products" element={<Products />} />
        <Route
          path="products/:productId"
          element={<ProductDetails />}
        />

        {/* Contact and login */}
        <Route path="contact" element={<Contact />} />
        <Route
          path="login"
          element={
            <Login
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
            />
          }
        />

        {/* Protected nested dashboard routes */}
        <Route
          path="dashboard"
          element={
            <ProtectedRoute
              loggedIn={loggedIn}
              onLogout={handleLogout}
            />
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="reports" element={<Reports />} />
        </Route>

        {/* Unknown page inside this section */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default function ReactRouterConcepts() {
  return <RouteExamples />;
}
