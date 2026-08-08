import { useNavigate } from "react-router-dom"

function Login() {

    const navigate = useNavigate()

    function handleLogin() {

    localStorage.setItem("isLoggedIn", "true");

    alert("Login Successful");

    navigate("/revision/dashboard");

    }

    return (

        <div className="page">

            <h1>

                Login Page

            </h1>

            <h2>

                Programmatic Navigation

            </h2>

            <p>

                After a successful login, the user is redirected to the Dashboard using useNavigate().

            </p>

            <button onClick={handleLogin}>

                Login

            </button>

        </div>

    )

}

export default Login