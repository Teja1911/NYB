import { BrowserRouter,Routes,Route } from "react-router-dom";
import ReactFundamentalsHome from "./daily-work/21-10-2026(ReactFundamentalsComponentsStateForms)/pages/ReactFundamentalsHome";
import ReactFundamentalsConcepts from "./daily-work/21-10-2026(ReactFundamentalsComponentsStateForms)/pages/ReactFundamentalsConcepts";
import StudentManagementWorkspace from "./daily-work/21-10-2026(ReactFundamentalsComponentsStateForms)/pages/StudentManagementWorkspace";
import EffectsApiStatePatternsHome from "./daily-work/22-10-2026(ReactEffectsApiContextReducerCustomHooks)/EffectsApiStatePatternsHome";
import AssignedTaskPractice from "./daily-work/22-10-2026(ReactEffectsApiContextReducerCustomHooks)/AssignedTaskPractice";
import UserManagementWorkspace from "./daily-work/22-10-2026(ReactEffectsApiContextReducerCustomHooks)/UserManagementWorkspace";
import ReactRouterAdvancedHome from "./daily-work/23-10-2026(ReactRouterAdvancedPerformance)/ReactRouterAdvancedHome";
import "./daily-work/23-10-2026(ReactRouterAdvancedPerformance)/styles/react-practice.css";
import {RouterPracticeHome,ProductDetailsPractice,QueryPractice,} from "./daily-work/23-10-2026(ReactRouterAdvancedPerformance)/RouterPractice";
import LoginPage from "./daily-work/23-10-2026(ReactRouterAdvancedPerformance)/pages/LoginPage";
import EmployeePortalLayout from "./daily-work/23-10-2026(ReactRouterAdvancedPerformance)/components/EmployeePortalLayout";
import ProtectedRoute from "./daily-work/23-10-2026(ReactRouterAdvancedPerformance)/components/ProtectedRoute";
import AppLayout from "./daily-work/23-10-2026(ReactRouterAdvancedPerformance)/components/AppLayout";
import DashboardPage from "./daily-work/23-10-2026(ReactRouterAdvancedPerformance)/pages/DashboardPage";
import EmployeeListPage from "./daily-work/23-10-2026(ReactRouterAdvancedPerformance)/pages/EmployeeListPage";
import EmployeeFormPage from "./daily-work/23-10-2026(ReactRouterAdvancedPerformance)/pages/EmployeeFormPage";
import EmployeeDetailsPage from "./daily-work/23-10-2026(ReactRouterAdvancedPerformance)/pages/EmployeeDetailsPage";
import PerformancePage from "./daily-work/23-10-2026(ReactRouterAdvancedPerformance)/pages/PerformancePage";
import ReactTestingBuildGitHome from "./daily-work/26-10-2026(ReactTestingBuildGit)/ReactTestingBuildGitHome";
import TestingPractice from "./daily-work/26-10-2026(ReactTestingBuildGit)/testing/TestingPractice";
import ProductionBuildGuide from "./daily-work/26-10-2026(ReactTestingBuildGit)/production-build/ProductionBuildGuide";
import GitWorkflowGuide from "./daily-work/26-10-2026(ReactTestingBuildGit)/git-practice/GitWorkflowGuide";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1 className="page">ReactDailyForge</h1>} />
        <Route path="/react-fundamentals-components-state-forms" element={<ReactFundamentalsHome />} />
        <Route path="/react-fundamentals-components-state-forms/concepts" element={<ReactFundamentalsConcepts />} />
        <Route path="/react-fundamentals-components-state-forms/student-management" element={<StudentManagementWorkspace />} />
        <Route path="*" element={<h2 className="page">Page Not Found</h2>} />
        <Route path="/effects-api-context-reducer-hooks" element={<EffectsApiStatePatternsHome />} />
        <Route path="/effects-api-context-reducer-hooks/practice" element={<AssignedTaskPractice />} /> 
        <Route path="/effects-api-context-reducer-hooks/user-management" element={<UserManagementWorkspace />} />
        <Route path="/router-advanced" element={<ReactRouterAdvancedHome />} />
        <Route path="/router-practice" element={<RouterPracticeHome />} />
        <Route path="/router-practice/products/:productId" element={<ProductDetailsPractice />} />
        <Route path="/router-practice/search" element={<QueryPractice />} />
        <Route element={<EmployeePortalLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/employees" element={<EmployeeListPage />} />
              <Route path="/employees/new" element={<EmployeeFormPage />} />
              <Route path="/employees/:employeeId" element={<EmployeeDetailsPage />} />
              <Route path="/employees/:employeeId/edit" element={<EmployeeFormPage />} />
              <Route path="/performance" element={<PerformancePage />} />
            </Route>
          </Route>
        </Route>
        <Route path="/testing-build-git" element={<ReactTestingBuildGitHome />} />
        <Route path="/testing-build-git/testing" element={<TestingPractice />} />
        <Route path="/testing-build-git/production-build" element={<ProductionBuildGuide />} />
        <Route path="/testing-build-git/git-practice" element={<GitWorkflowGuide />} />
      </Routes>
    </BrowserRouter>
  );
}