import { BrowserRouter,Routes,Route } from "react-router-dom";
import ReactFundamentalsHome from "./daily-work/21-10-2026(ReactFundamentalsComponentsStateForms)/pages/ReactFundamentalsHome";
import ReactFundamentalsConcepts from "./daily-work/21-10-2026(ReactFundamentalsComponentsStateForms)/pages/ReactFundamentalsConcepts";
import StudentManagementWorkspace from "./daily-work/21-10-2026(ReactFundamentalsComponentsStateForms)/pages/StudentManagementWorkspace";
import EffectsApiStatePatternsHome from "./daily-work/22-10-2026(ReactEffectsApiContextReducerCustomHooks)/EffectsApiStatePatternsHome";
import AssignedTaskPractice from "./daily-work/22-10-2026(ReactEffectsApiContextReducerCustomHooks)/AssignedTaskPractice";
import UserManagementWorkspace from "./daily-work/22-10-2026(ReactEffectsApiContextReducerCustomHooks)/UserManagementWorkspace";

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
      </Routes>
    </BrowserRouter>
  );
}