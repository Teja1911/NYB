// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
// import A from './Components/State/GlobalState/ContextAPI/A'
// // import A from './FunctionalComponents/A.jsx'
// // import B from './ClassComponents/A.jsx'
// // import Parent from './Props/A.jsx'
// // import Header from './Header.jsx'
// // import Profile from './Profile.jsx'
// // import Counter from './Counter.jsx'
// // import ChildA from './ChildA.jsx'
// // import ChildB from './ChildB.jsx'
// // import Parents from './Props/ParentToChild/Parent.jsx'
// // import ChildS from './Props/ChildS/A.jsx'
// // import A from './Props/Props/A.jsx'
// // import A from './Dummy/A.jsx'


// function App() {
//   // const[message,setMessage]=useState("")
//   return (
//     <>
//       {/* <h1>Name: Teja</h1>
//       <p>Course: React</p>
//       <p>Today Concept: React Basics</p> */}
//       {/* <A/>
//       <B/>
//       <Parent/>
//       <Header/>
//       <Profile name="Teja"/>
//       <Counter/>
//       <ChildA sendMessage={setMessage}/>
//       <ChildB message={message}/> */}
//       {/* <Parents/>
//       <ChildS/> */}
//       <A/>
//     </>
//   )
// }

// export default App
import React from 'react'
import Functionalpage from './pages/FunctionalComponents_07-07-2026/Functionalpage'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import ClassPage from './pages/ClassComponent_07-07-2026/ClassPage'
import Dummypages from './pages/Dummy_08-07-2026/Dummypages'
import A from './pages/Props_08-07-2026/Childs/A'
import Child from './pages/Props_08-07-2026/ParentToChild/Child'
import Prop from './pages/Props_08-07-2026/Props/Prop.jsx'
import State from './pages/LocalState_09-07-2026/UseState/State.jsx'
import Context from './pages/GlobalState_09-07-2026/ContextAPI/Context.jsx'
import ContextDemo from './pages/FoodieHub/ContextDemo.jsx'
import AxiosPage from './pages/API_10-07-2026/AxiosSection.jsx'
import Redux from './pages/GlobalState_09-07-2026/Redux/Redux.jsx'
import ReduxToolkit from './pages/ReduxToolkit_14-07-2026/ReduxToolkit.jsx'
import Reducer from './pages/LocalState_09-07-2026/UseReducer/UseReducerPage.jsx'
import EmployeeDashboard from './pages/EmployeeDashboard_13-07-2026/EmployeeDashboard.jsx'
import ClassComponentPage from './pages/practice_17-07-2026/ClassComponentPage.jsx'
import FunctionalComponentPage from './pages/practice_17-07-2026/FunctionalComponentPage.jsx'
import ConditionalRenderingPage from './pages/practice_17-07-2026/ConditionalRenderingPage.jsx'
import ContextAPIChildPage from './pages/practice_17-07-2026/ContextAPIChildPage.jsx'
import EventHandlingPage from './pages/practice_17-07-2026/EventHandlingPage.jsx'
import FetchAPIPage from './pages/practice_17-07-2026/FetchAPIPage.jsx'
import ListRenderingPage from './pages/practice_17-07-2026/ListRenderingPage.jsx'
import PropsPage from './pages/practice_17-07-2026/PropsPage.jsx'
import StatePage from './pages/practice_17-07-2026/StatePage.jsx'
import UseEffectPage from './pages/practice_17-07-2026/UseEffectPage.jsx'
import UseReducerPage from './pages/practice_17-07-2026/UseReducerPage.jsx'
import StudentManagementPage from './pages/Student-Management_17-07-2026/StudentManagementPage.jsx'
import LoginLogout from './projects/Login/LoginLogout.jsx'
import ConditionalRenderingExamplePage from './pages/ConditionalRendering_20-07-2026/ConditionalRenderingExamplePage.jsx'
import APIDemoPage from './pages/APIDemo_21-07-2026/APIDemoPage.jsx'
import APIDemoFetchPage from './pages/APIDemo_21-07-2026/APIDemoFetchPage.jsx'
import APIDemoAxiosPage from './pages/APIDemo_21-07-2026/APIDemoAxiosPage.jsx'
import RegistrationPage from './pages/DynamicForm_22-07-2026/RegistrationPage.jsx'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/function" element={<Functionalpage/>}/>
          <Route path='/class' element={<ClassPage/>}/>
          <Route path='/dummy' element={<Dummypages/>}/>
          <Route path="/childs" element={<A/>}/>
          <Route path="/parent" element={<Child/>}/>
          <Route path="/props" element={<Prop/>}/>
          <Route path="/usestate" element={<State/>}/>
          <Route path="/context" element={<Context/>}/>
          <Route path="/foodiehub" element={<ContextDemo/>}/>
          <Route path="/apidemo" element={<AxiosPage/>}/>
          <Route path='/employeedashboard' element={<EmployeeDashboard/>}/>
          <Route path='/redux' element={<Redux/>}/>
          <Route path='/reduxtoolkit' element={<ReduxToolkit/>}/>
          <Route path='/reducer' element={<Reducer/>}/>
          <Route path='/classcomponent' element={<ClassComponentPage/>}/>
          <Route path='/functionalcomponent' element={<FunctionalComponentPage/>}/>
          <Route path='/conditionalrendering' element={<ConditionalRenderingPage/>}/>
          <Route path='/contextapi' element={<ContextAPIChildPage/>}/>
          <Route path='/eventhandling' element={<EventHandlingPage/>}/>
          <Route path='/fetchapi' element={<FetchAPIPage/>}/>
          <Route path='/listrendering' element={<ListRenderingPage/>}/>
          <Route path='/props' element={<PropsPage/>}/>
          <Route path='/state' element={<StatePage/>}/>
          <Route path='/useeffect' element={<UseEffectPage/>}/>
          <Route path='/useReducer' element={<UseReducerPage/>}/>
          <Route path='/studentmanagement' element={<StudentManagementPage/>}/>
          <Route path='/conditionalrenderingexamples' element={<ConditionalRenderingExamplePage/>}/>
          <Route path='/loginlogout' element={<LoginLogout/>}/>
          <Route path='/apidemopage' element={<APIDemoPage/>}/>
          <Route path='/apidemofetchpage' element={<APIDemoFetchPage/>}/>
          <Route path='/apidemoaxiospage' element={<APIDemoAxiosPage/>}/>
          <Route path='/registrationform' element={<RegistrationPage/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App