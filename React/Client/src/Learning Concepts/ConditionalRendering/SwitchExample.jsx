import React from 'react'

function SwitchExample() {
    const role="Admin"
    switch(role){
        case "Admin":
            return <h2>Admin Dashboard</h2>
            case "HR":
                return <h2>HR Dashboard</h2>
                case "Employee":
                    return <h2>Employee Dashboard</h2>
                    default:
                        return <h2>No Access</h2>
    }
}

export default SwitchExample