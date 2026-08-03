function DashboardHome() {

    return (

        <>

            {/* Dashboard Header */}

            <div className="dashboard-header">

                <h1>

                    Welcome Back, John 👋

                </h1>

                <p>

                    Employee Management Dashboard

                </p>

            </div>

            {/* Statistics */}

            <div className="dashboard-grid">

                <div className="stat-card">

                    <h3>Total Employees</h3>

                    <h2>125</h2>

                </div>

                <div className="stat-card">

                    <h3>Departments</h3>

                    <h2>8</h2>

                </div>

                <div className="stat-card">

                    <h3>Reports</h3>

                    <h2>12</h2>

                </div>

                <div className="stat-card">

                    <h3>Total Salary</h3>

                    <h2>₹25L</h2>

                </div>

            </div>

            {/* Bottom Section */}

            <div className="dashboard-content">

                {/* Recent Activity */}

                <div className="recent-activity">

                    <h2>

                        Recent Activity

                    </h2>

                    <div className="activity-item">

                        <span className="activity-user">

                            John Added

                        </span>

                        <span className="activity-time">

                            2 mins ago

                        </span>

                    </div>

                    <div className="activity-item">

                        <span className="activity-user">

                            Steve Updated

                        </span>

                        <span className="activity-time">

                            10 mins ago

                        </span>

                    </div>

                    <div className="activity-item">

                        <span className="activity-user">

                            Robert Deleted

                        </span>

                        <span className="activity-time">

                            1 hour ago

                        </span>

                    </div>

                </div>

                {/* Quick Actions */}

                <div className="quick-actions">

                    <h2>

                        Quick Actions

                    </h2>

                    <div className="action-buttons">

                        <button className="primary-btn">

                            Add Employee

                        </button>

                        <button className="success-btn">

                            Generate Report

                        </button>

                    </div>

                </div>

            </div>

        </>

    );

}

export default DashboardHome;