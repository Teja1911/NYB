import { useState } from "react";
import Modal from "./Modal";

function ModalApp() {

    const [isOpen, setIsOpen] = useState(false);

    function openModal() {

        setIsOpen(true);

    }

    function closeModal() {

        setIsOpen(false);

    }

    return (

        <div className="dashboard">

            <h1>

                Employee Management System

            </h1>

            <button

                onClick={openModal}

            >

                Add Employee

            </button>

            {

                isOpen &&

                <Modal

                    closeModal={closeModal}

                />

            }

        </div>

    );

}

export default ModalApp;