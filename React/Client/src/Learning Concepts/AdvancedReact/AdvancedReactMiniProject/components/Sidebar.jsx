import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

function Sidebar() {

    const {

        theme

    } = useContext(ThemeContext);

    return (

        <aside className={`sidebar ${theme}`}>

            <h3>Menu</h3>

            <ul>

                <li>Dashboard</li>

                <li>Employees</li>

                <li>Attendance</li>

                <li>Settings</li>

            </ul>

        </aside>

    );

}

export default Sidebar;