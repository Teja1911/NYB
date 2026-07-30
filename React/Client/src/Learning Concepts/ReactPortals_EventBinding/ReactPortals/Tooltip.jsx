import { createPortal } from 'react-dom'

function Tooltip({text,x,y}) {
  return createPortal(
    <div className='tooltip' style={{left:x,top:y}}>
        {text}
    </div>,
    document.getElementById("portal-root")
  )
}

export default Tooltip