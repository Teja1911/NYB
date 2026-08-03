import { createPortal } from "react-dom";
import EmployeeForm from "./EmployeeForm";

function EmployeeModal({

    isOpen,

    employee,

    onSave,

    onClose

}) {

    if (!isOpen) {

        return null;

    }

    return createPortal(

        <div

            className="modal-overlay"

            onClick={onClose}

        >

            <div

                className="modal"

                onClick={(event) => event.stopPropagation()}

            >

                <div className="modal-header">

                    <h2>

                        {

                            employee

                                ? "Edit Employee"

                                : "Add Employee"

                        }

                    </h2>

                    <button

                        type="button"

                        className="close-btn"

                        aria-label="Close Modal"

                        onClick={onClose}

                    >

                        ✕

                    </button>

                </div>

                <EmployeeForm

                    employee={employee}

                    onSave={onSave}

                    onCancel={onClose}

                />

            </div>

        </div>,

        document.body

    );

}

export default EmployeeModal;