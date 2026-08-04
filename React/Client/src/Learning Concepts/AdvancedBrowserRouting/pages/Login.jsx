import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    function handleLogin() {

        alert("Login Successful");

        navigate("/advancedbrowserrouting/dashboard/profile");

    }

    return (

        <div className="page">

            <h2>

                Login Page

            </h2>

            <p>

                Click the button below to login.

            </p>

            <button

                onClick={handleLogin}

            >

                Login

            </button>

        </div>

    )

}

export default Login