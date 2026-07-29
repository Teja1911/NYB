import React from "react";

function ActionButtons({ onSave, onDelete }) {

    console.log("ActionButtons Rendered");

    return (

        <div className="card">

            <h2>

                Employee Actions

            </h2>

            <button

                onClick={onSave}

            >

                Save Employee

            </button>

            <button

                onClick={onDelete}

                style={{ marginLeft: "10px" }}

            >

                Delete Employee

            </button>

        </div>

    );

}

export default React.memo(ActionButtons);