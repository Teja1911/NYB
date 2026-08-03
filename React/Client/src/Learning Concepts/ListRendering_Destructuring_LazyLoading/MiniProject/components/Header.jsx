import useTheme from "../hooks/useTheme";

function Header() {

    const { theme, toggleTheme } = useTheme();

    return (

        <header className={`header ${theme}`}>

            {/* ================= Logo Section ================= */}

            <div className="logo">

                <img
                    src="/logo.png"
                    alt="Employee Management System Logo"
                />

                <h2>
                    EMS
                </h2>

            </div>

            {/* ================= Project Title ================= */}

            <div className="header-title">

                <h1>
                    Employee Management System
                </h1>

            </div>

            {/* ================= Right Section ================= */}

            <div className="header-right">

                {/* User Profile */}

                <div className="user-profile">

                    <div className="user-avatar">

                        J

                    </div>

                    <div className="user-details">

                        <h4>

                            John Doe

                        </h4>

                        <span>

                            HR Manager

                        </span>

                    </div>

                </div>

                {/* Theme Toggle */}

                <button

                    className="theme-btn"

                    onClick={toggleTheme}

                    aria-label="Toggle Theme"

                >

                    {

                        theme === "light"

                            ? "🌙 Dark"

                            : "☀ Light"

                    }

                </button>

            </div>

        </header>

    );

}

export default Header;