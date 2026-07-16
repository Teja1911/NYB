import React, { useContext } from 'react'
import { AppContext } from './AppContext'
import {
    FaUserCircle,
    FaIdBadge,
    FaEnvelope,
    FaPhone,
    FaBuilding,
    FaBriefcase,
    FaCalendarAlt,
    FaUserTie
} from 'react-icons/fa'

function UserProfile() {
    const{user}=useContext(AppContext)
  return (
    <div className="card profile-card">
        <div className="profile-header">
            <FaUserCircle className="profile-avatar"/>
                <div>
                    <h2>{user.name}</h2>
                    <p>{user.role}</p>
                </div>
        </div>
            <hr/>
            <div className="profile-details">
                <p>
                    <FaIdBadge />
                    <strong> Employee ID :</strong>
                    EMP1001
                </p>
                <p>
                    <FaBuilding />
                    <strong> Department :</strong>
                    Frontend Engineering
                </p>
                <p>
                    <FaEnvelope />
                    <strong> Email :</strong>
                    tejaswar@example.com
                </p>

                <p>
                    <FaPhone />
                    <strong> Phone :</strong>
                    +91 9876543210
                </p>

                <p>
                    <FaBriefcase />
                    <strong> Experience :</strong>
                    1 Year
                </p>

                <p>
                    <FaCalendarAlt />
                    <strong> Joining Date :</strong>
                    17-Feb-2026
                </p>

                <p>
                    <FaUserTie />
                    <strong> Reporting Manager :</strong>
                    VaraPrasad
                </p>
                <p>
                    <strong>Status :</strong>
                    <span className="status-active">
                        ● Active
                    </span>
                </p>
            </div>
    </div>
  )
}

export default UserProfile