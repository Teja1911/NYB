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
import AxiosPage from './pages/API_10-07-2026/AxiosPage.jsx'
import ContextPage from './pages/EmployeeDashboard_13-07-2026/EmployeeDashboard.jsx'

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
          <Route path='/contextapidemo' element={<ContextPage/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App