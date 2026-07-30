import {createPortal} from "react-dom"

function Modal({closeModal}) {
  return createPortal(
    <div className="overlay">
        <div className="modal">
            <h2>Employee Added Successfully</h2>
            <p>Welcome to React Portals.</p>
            <button onClick={closeModal}>Close</button>
        </div>
    </div>,
    document.getElementById("portal-root")
  )
}

export default Modal