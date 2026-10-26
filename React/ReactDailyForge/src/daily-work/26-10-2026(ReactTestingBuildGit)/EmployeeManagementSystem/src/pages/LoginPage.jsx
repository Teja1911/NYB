import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login, isAuthenticated } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const requestedPath = location.state?.from;
  const redirectPath =
    requestedPath?.pathname?.startsWith("/") &&
    !requestedPath.pathname.startsWith("//") &&
    requestedPath.pathname !== "/login"
      ? `${requestedPath.pathname}${requestedPath.search || ""}${requestedPath.hash || ""}`
      : "/dashboard";

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const normalizedEmail = email.trim();

    if (!normalizedEmail || !password) {
      setError("Please enter both your email and password.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(normalizedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    const result = login(normalizedEmail, password);

    setIsSubmitting(false);

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate(redirectPath, { replace: true });
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-brand">
          <span className="login-brand-icon" aria-hidden="true">
            EMS
          </span>

          <p>EMPLOYEE OPERATIONS</p>
        </div>

        <h1>Welcome back</h1>

        <p className="login-description">
          Sign in to access your employee management workspace.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="email">Email address</label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="username"
              placeholder="admin@company.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          {error && (
            <div className="login-error" role="alert">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="login-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <div className="demo-credentials">
          <h2>Demo credentials</h2>

          <p>
            <strong>Email:</strong> admin@company.com
          </p>

          <p>
            <strong>Password:</strong> Admin123!
          </p>
        </div>

        <p className="login-footer">
          Employee Management System · Learning Project
        </p>
      </section>
    </main>
  );
}

export default LoginPage;