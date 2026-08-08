import { useNavigate } from "react-router-dom";

function Services() {

    const navigate = useNavigate();

    function goToContact() {

        navigate("/revision/contact");

    }

    return (

        <div className="page">

            <h1>

                Services Page

            </h1>

            <h2>

                useNavigate()

            </h2>

            <p>

                useNavigate() is used to navigate programmatically from one page to another.

            </p>

            <button onClick={goToContact}>

                Go To Contact Page

            </button>

        </div>

    );

}

export default Services