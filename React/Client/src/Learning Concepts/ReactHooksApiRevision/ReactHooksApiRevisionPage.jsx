import UserDashboard from './components/UserDashboard'
import "./css/style.css"

function ReactHooksApiRevisionPage() {
  return (
    <div className='hooks-revision-container'>
        <h1>React Hooks & API Revision</h1>
        <p className='revision-description'>
            Fetch and Display users using React Hooks
        </p>
        <UserDashboard/>
    </div>
  )
}

export default ReactHooksApiRevisionPage