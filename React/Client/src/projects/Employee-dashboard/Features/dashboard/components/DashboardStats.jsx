import React from 'react'

function DashboardStats() {
    const stats = [
        {
            title: "Employees",
            value: 125,
            icon: "👨‍💼"
        },
        {
            title: "Attendance",
            value: "92%",
            icon: "📅"
        },
        {
            title: "Leaves",
            value: 12,
            icon: "📝"
        },
        {
            title: "Projects",
            value: 8,
            icon: "📊"
        }
    ]
  return (
     <div className="stats-grid">
            {
                stats.map((item) => (
                    <div
                        className="stat-card"
                        key={item.title}
                    >
                        <h1>{item.icon}</h1>
                        <h2>{item.value}</h2>
                        <p>{item.title}</p>
                    </div>
                ))

            }
        </div>
  )
}

export default DashboardStats