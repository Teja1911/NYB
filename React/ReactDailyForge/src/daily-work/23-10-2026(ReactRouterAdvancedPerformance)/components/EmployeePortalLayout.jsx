
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { EmployeeProvider } from "../context/EmployeeContext";

export default function EmployeePortalLayout() {
  return (
    <AuthProvider>
      <EmployeeProvider>
        <Outlet />
      </EmployeeProvider>
    </AuthProvider>
  );
}
