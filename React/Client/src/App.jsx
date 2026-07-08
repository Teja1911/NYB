import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// import A from './FunctionalComponents/A.jsx'
// import B from './ClassComponents/A.jsx'
// import Parent from './Props/A.jsx'
// import Header from './Header.jsx'
// import Profile from './Profile.jsx'
// import Counter from './Counter.jsx'
// import ChildA from './ChildA.jsx'
// import ChildB from './ChildB.jsx'
import Parents from './Props/ParentToChild/Parent.jsx'
import ChildS from './Props/ChildS/A.jsx'
import A from './Props/Props/A.jsx'
// import A from './Dummy/A.jsx'


function App() {
  // const[message,setMessage]=useState("")
  return (
    <>
      {/* <h1>Name: Teja</h1>
      <p>Course: React</p>
      <p>Today Concept: React Basics</p> */}
      {/* <A/>
      <B/>
      <Parent/>
      <Header/>
      <Profile name="Teja"/>
      <Counter/>
      <ChildA sendMessage={setMessage}/>
      <ChildB message={message}/> */}
      <Parents/>
      <ChildS/>
      <A/>
    </>
  )
}

export default App
