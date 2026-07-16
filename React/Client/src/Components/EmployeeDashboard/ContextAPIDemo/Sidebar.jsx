import React, { useContext } from 'react'
import { AppContext } from './AppContext'
import{
    FaHome,
    FaUsers,
    FaCalendarAlt,
    FaClipboardList,
    FaLaptop,
    FaFolderOpen,
    FaMoneyBillWave,
    FaChartBar,
    FaCog,
    FaUserCircle
} from 'react-icons/fa'

function Sidebar() {
    const{user}=useContext(AppContext)
    const menus = [
        {
            icon: <FaHome />,
            title: "Dashboard"
        },
        {
            icon: <FaUsers />,
            title: "Employees"
        },
        {
            icon: <FaCalendarAlt />,
            title: "Attendance"
        },
        {
            icon: <FaClipboardList />,
            title: "Leave Management"
        },
        {
            icon: <FaLaptop />,
            title: "Assets"
        },
        {
            icon: <FaFolderOpen />,
            title: "Projects"
        },
        {
            icon: <FaMoneyBillWave />,
            title: "Payroll"
        },
        {
            icon: <FaChartBar />,
            title: "Reports"
        },
        {
            icon: <FaCog />,
            title: "Settings"
        }
    ]
  return (
    <aside className="sidebar">
            <div className="sidebar-profile">
                <FaUserCircle className="sidebar-avatar"/>
                <h3>{user.name}</h3>
                <p>{user.role}</p>
            </div>
            <hr />
            <ul>
                {
                    menus.map((menu)=>(
                        <li key={menu.title}>
                            {menu.icon}
                            <span>{menu.title}</span>
                        </li>
                    ))
                }
            </ul>
            <div className="sidebar-footer">
                Employee Portal
                <br/>
                Version 1.0
            </div>
    </aside>
  )
}

export default Sidebar