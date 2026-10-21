import { BrowserRouter,Routes,Route } from "react-router-dom";
import ReactFundamentalsHome from "./daily-work/21-10-2026(ReactFundamentalsComponentsStateForms)/pages/ReactFundamentalsHome";
import ReactFundamentalsConcepts from "./daily-work/21-10-2026(ReactFundamentalsComponentsStateForms)/pages/ReactFundamentalsConcepts";
import StudentManagementWorkspace from "./daily-work/21-10-2026(ReactFundamentalsComponentsStateForms)/pages/StudentManagementWorkspace";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1 className="page">ReactDailyForge</h1>} />
        <Route path="/react-fundamentals-components-state-forms" element={<ReactFundamentalsHome />} />
        <Route path="/react-fundamentals-components-state-forms/concepts" element={<ReactFundamentalsConcepts />} />
        <Route path="/react-fundamentals-components-state-forms/student-management" element={<StudentManagementWorkspace />} />
        <Route path="*" element={<h2 className="page">Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}