import {BrowserRouter,Routes,Route} from 'react-router-dom'
import FunctionalComponent from './React Revision/FunctionalComponent'
import Reusable from './React Revision/Reusable'
import MiniAssessment from './React Revision/05-10-2026(React Fundamentals)/Mini Assessment/MiniAssessment'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/FunctionalComponent' element={<FunctionalComponent />} />  
        <Route path='/Reusable' element={<Reusable />} />
        <Route path='/MiniAssessment' element={<MiniAssessment />} />
      </Routes>   
    </BrowserRouter>
  )
}

export default App
