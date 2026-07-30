import React from 'react'
import { createPortal } from 'react-dom'

function Popup({closePopup}) {
  return createPortal(
    <div className='popup'>
        <h3>Employee Deleted Successfully</h3>
        <button onClick={closePopup}>OK</button>
    </div>,
    document.getElementById("portal-root")
  )
}

export default Popup