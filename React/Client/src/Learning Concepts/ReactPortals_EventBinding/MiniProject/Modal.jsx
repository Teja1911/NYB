import { createPortal } from "react-dom";
import Form from "./Form";

function Modal({ closeModal }) {

    return createPortal(

        <div className="overlay">

            <div className="modal">

                <div className="modal-header">

                    <h2>

                        Employee Registration

                    </h2>

                    <button

                        className="close-btn"

                        onClick={closeModal}

                    >

                        ✕

                    </button>

                </div>

                <Form closeModal={closeModal} />

            </div>

        </div>,

        document.getElementById("portal-root")

    );

}

export default Modal;