import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";

function ReactRoutingRevisionPage() {
    return (
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    );
}

export default ReactRoutingRevisionPage;