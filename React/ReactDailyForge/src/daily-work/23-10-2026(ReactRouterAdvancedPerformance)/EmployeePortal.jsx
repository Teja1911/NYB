
import { AuthProvider } from "./context/AuthContext";
import { EmployeeProvider } from "./context/EmployeeContext";
import ErrorBoundary from "./components/ErrorBoundary";

export default function EmployeePortal({ children }) {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <EmployeeProvider>
          {children}
        </EmployeeProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}
