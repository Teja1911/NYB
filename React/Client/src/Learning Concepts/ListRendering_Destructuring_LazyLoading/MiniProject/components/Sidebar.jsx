import useTheme from "../hooks/useTheme";

function Sidebar({ currentPage, setCurrentPage }) {

    const { theme } = useTheme();

    const menuItems = [

        {
            id: "dashboard",
            icon: "🏠",
            label: "Dashboard"
        },

        {
            id: "employees",
            icon: "👨‍💼",
            label: "Employees"
        },

        {
            id: "reports",
            icon: "📊",
            label: "Reports"
        },

        {
            id: "settings",
            icon: "⚙",
            label: "Settings"
        }

    ];

    return (

        <aside className={`sidebar ${theme}`}>

            <ul className="sidebar-menu">

                {

                    menuItems.map((item) => (

                        <li key={item.id}>

                            <button

                                type="button"

                                className={
                                    currentPage === item.id
                                        ? "active"
                                        : ""
                                }

                                onClick={() => setCurrentPage(item.id)}

                            >

                                <span>

                                    {item.icon}

                                </span>

                                <span className="menu-text">

                                    {item.label}

                                </span>

                            </button>

                        </li>

                    ))

                }

            </ul>

            <div className="sidebar-footer">

                <p>

                    Employee Management System

                </p>

                <p>

                    Version 1.0

                </p>

            </div>

        </aside>

    );

}

export default Sidebar;