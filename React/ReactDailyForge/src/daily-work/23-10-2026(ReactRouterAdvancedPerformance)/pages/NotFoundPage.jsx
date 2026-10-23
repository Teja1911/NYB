
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="page-content">
      <h2>404 — Page Not Found</h2>
      <p>The requested page does not exist.</p>
      <Link to="/">Return to ReactDailyForge</Link>
    </main>
  );
}
