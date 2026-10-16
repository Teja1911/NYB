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
import ReactRouterConcepts from './React Revision/12-10-2026-react-router/ReactRouterConcepts'
import ReactRouterAssignment from './React Revision/12-10-2026-react-router/ReactRouterAssignment'
import EmployeeManagementAssessment from './React Revision/12-10-2026-react-router/EmployeeManagementAssessment/EmployeeManagementAssessment'
import ReducerContextConcepts from './React Revision/13-10-2026(useReducer context)/ReducerContextConcepts'
import ReducerContextAssignement from './React Revision/13-10-2026(useReducer context)/ReducerContextAssignment'
import EmployeeStateAssessment from './React Revision/13-10-2026(useReducer context)/EmployeeStateAssessment/EmployeeStateAssessment'
import ReactPerformanceConcepts from './React Revision/14-10-2026(react performance)/ReactPerformanceConcepts'
import ReactPerformanceAssignment from './React Revision/14-10-2026(react performance)/ReactPerformanceAssignment'
import EmployeeAnalyticsAssessment from './React Revision/14-10-2026(react performance)/EmployeeAnalyticsAssessment/EmployeeAnalyticsAssessment'
import ReusableArchitectureConcepts from './React Revision/15-10-2026(reusable components architecture)/ReusableArchitectureConcepts'
import ReusableArchitectureAssignment from './React Revision/15-10-2026(reusable components architecture)/ReusableArchitectureAssignment'
import EmployeePortal from './React Revision/15-10-2026(reusable components architecture)/EmployeePortal/EmployeePortal'
import ReactTestingConcepts from './React Revision/16-10-2026(testing build submission)/ReactTestingConcepts'
import ReactTestingAssignment from './React Revision/16-10-2026(testing build submission)/ReactTestingAssignment'
import EmployeeManagementSystem from './React Revision/16-10-2026(testing build submission)/EmployeeManagementSystem/EmployeeManagementSystem'
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
        <Route path='/ReactRouterConcepts/*' element={<ReactRouterConcepts/>}/>
        <Route path='/ReactRouterAssignment/*' element={<ReactRouterAssignment/>}/>
        <Route path='/EmployeeManagementAssessment/*' element={<EmployeeManagementAssessment/>}/>
        <Route path='/ReducerContextConcepts/*' element={<ReducerContextConcepts />} />
        <Route path='/ReducerContextAssignment/*' element={<ReducerContextAssignement />} />
        <Route path='/EmployeeStateAssessment/*' element={<EmployeeStateAssessment />} />
        <Route path='/ReactPerformanceConcepts/*' element={<ReactPerformanceConcepts/>}/>
        <Route path='/ReactPerformanceAssignment/*' element={<ReactPerformanceAssignment />} />
        <Route path='/EmployeeAnalyticsAssessment/*' element={<EmployeeAnalyticsAssessment/>}/>
        <Route path='/ReusableArchitectureConcepts/*' element={<ReusableArchitectureConcepts/>}/>
        <Route path='/ReusableArchitectureAssignment/*' element={<ReusableArchitectureAssignment />} />
        <Route path='/EmployeePortal/*' element={<EmployeePortal />} />
        <Route path='/ReactTestingConcepts/*' element={<ReactTestingConcepts />} />
        <Route path='ReactTestingAssignment/*' element={<ReactTestingAssignment />} />
        <Route path='/EmployeeManagementSystem/*' element={<EmployeeManagementSystem />} />
      </Routes>   
    </BrowserRouter>
  )
}

export default App
