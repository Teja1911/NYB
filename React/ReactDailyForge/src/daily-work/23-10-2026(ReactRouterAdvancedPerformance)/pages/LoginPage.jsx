
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { user, login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    try {
      login(username, password);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err.message);
    }
  }

  if (user) {
    return (
      <main className="page-content">
        <p>You are already logged in.</p>
        <button onClick={() => navigate("/dashboard")}>
          Go to Dashboard
        </button>
      </main>
    );
  }

  return (
    <main className="page-content">
      <form className="form-panel" onSubmit={handleSubmit}>
        <h2>Employee Portal Login</h2>
        <p>Demo only: enter any non-empty username and password.</p>

        <label>
          Username
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>

        {error && <p role="alert">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
