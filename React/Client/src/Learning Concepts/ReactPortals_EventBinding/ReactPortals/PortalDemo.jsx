import { useState } from "react"
import Modal from "./Modal"
import "./portal.css"
import Popup from "./PopUp"
import Tooltip from "./Tooltip"

function PortalDemo() {
    const[isOpen,setIsOpen]=useState(false)
    const[showPopup,setShowPopup]=useState(false)
    const[showTooltip,setShowTooltip]=useState(false)
  return (
    <div className="container">
        <h2>React Portal Demo</h2>
        <button onClick={()=>setIsOpen(true)}>Open Modal</button>
        {
            isOpen && (
                <Modal closeModal={()=>setIsOpen(false)}/>
            )
        }
        <button onClick={()=>setShowPopup(true)}>Delete Employee</button>
        {
            showPopup && (
                <Popup closePopup={()=>setShowPopup(false)}/>
            )
        }
        <button 
            onMouseEnter={()=>setShowTooltip(true)}
            onMouseLeave={()=>setShowTooltip(false)}>
                Delete
        </button>
        {
            showTooltip && (
                <Tooltip text="Delete Employee" x={450} y={120}/>
            )
        }
    </div>
  )
}

export default PortalDemo