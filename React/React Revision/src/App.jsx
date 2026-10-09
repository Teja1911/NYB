import {BrowserRouter,Routes,Route} from 'react-router-dom'
import FunctionalComponent from './React Revision/FunctionalComponent'
import Reusable from './React Revision/Reusable'
import MiniAssessment from './React Revision/05-10-2026(React Fundamentals)/Mini Assessment/MiniAssessment'
import Parent from './React Revision/06-10-2026(props state component communication)/concepts-example/ConceptsExample'
import AssignedTask from './React Revision/06-10-2026(props state component communication)/assigned-task/AssignedTask'
import PracticalAssessmentProps from './React Revision/06-10-2026(props state component communication)/practical-assessment/PracticalAssessmentsProps'
import ListsFormsEventsConcepts from './React Revision/07-10-2026(Lists, Forms, Events & useEffect)/Concepts Example/ListsFormsEventsConcepts'
import ListsFormsEventsAssignment from './React Revision/07-10-2026(Lists, Forms, Events & useEffect)/Assigned Task/ListsFormsEventsAssignment'
import UserRegistrationAssessment from './React Revision/07-10-2026(Lists, Forms, Events & useEffect)/Pratical Task/UserRegistrationAssessment'
import ApiIntegrationConcepts from './React Revision/08-10-2026(api integration data handling)/ApiIntegrationConcepts'
import ApiIntegrationAssignment from './React Revision/08-10-2026(api integration data handling)/ApiIntegrationAssignment'
import UserManagementAssessment from './React Revision/08-10-2026(api integration data handling)/UserManagementAssessment/UserManagementAssessment'
import ContextCustomHooksConcepts from './React Revision/09-10-2026(context api custom hooks)/ContextCustomHooksConcepts'
import ContextCustomHooksAssignment from './React Revision/09-10-2026(context api custom hooks)/ContextCustomHooksAssignment'
import TeamTaskTracker from './React Revision/09-10-2026(context api custom hooks)/TeamTaskTracker/TeamTaskTracker'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/FunctionalComponent' element={<FunctionalComponent />} />  
        <Route path='/Reusable' element={<Reusable />} />
        <Route path='/MiniAssessment' element={<MiniAssessment />} />
        <Route path='/Props' element={<Parent />} />
        <Route path='/AssignedTaskProps' element={<AssignedTask />} />
        <Route path='/PracticalAssessmentProps' element={<PracticalAssessmentProps />} />
        <Route path='/ListsFormsEventsConcepts' element={<ListsFormsEventsConcepts />} />
        <Route path='/ListsFormsEventsAssignment' element={<ListsFormsEventsAssignment />} />
        <Route path='/UserRegistrationAssessment' element={<UserRegistrationAssessment />} />
        <Route path='/ApiIntegrationConcepts' element={<ApiIntegrationConcepts />} />
        <Route path='/ApiIntegrationAssignment' element={<ApiIntegrationAssignment />} />
        <Route path='/UserManagementAssessment' element={<UserManagementAssessment />} /> 
        <Route path='/ContextCustomHooksConcepts' element={<ContextCustomHooksConcepts />} />
        <Route path='/ContextCustomHooksAssignment' element={<ContextCustomHooksAssignment />} />
        <Route path='/TeamTaskTracker' element={<TeamTaskTracker />} />
      </Routes>   
    </BrowserRouter>
  )
}

export default App
