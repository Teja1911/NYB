
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

export function RouterPracticeHome() {
  const navigate = useNavigate();

  return (
    <main className="page-content">
      <h2>Router Practice</h2>

      <p>
        <Link to="/router-practice/products/101">
          View product 101
        </Link>
      </p>

      <p>
        <Link to="/router-practice/products/202">
          View product 202
        </Link>
      </p>

      <p>
        <Link to="/router-practice/search?category=IT">
          Search IT category
        </Link>
      </p>

      <button
        onClick={() =>
          navigate("/router-practice/products/303")
        }
      >
        Navigate to product 303
      </button>
    </main>
  );
}

export function ProductDetailsPractice() {
  const { productId } = useParams();

  return (
    <main className="page-content">
      <h2>Product Details</h2>
      <p>Dynamic product ID: {productId}</p>
      <Link to="/router-practice">Back to Router Practice</Link>
    </main>
  );
}

export function QueryPractice() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "All";

  return (
    <main className="page-content">
      <h2>Query Parameter Practice</h2>
      <p>Selected category: {category}</p>

      <button onClick={() => setSearchParams({ category: "HR" })}>
        Change category to HR
      </button>

      <button onClick={() => setSearchParams({})}>
        Clear query parameters
      </button>
    </main>
  );
}
