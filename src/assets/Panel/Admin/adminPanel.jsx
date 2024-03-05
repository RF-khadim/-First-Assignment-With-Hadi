import React from 'react'
import DashboardCharts from './Dashboard/dashboardCharts'
import AdminNavigation from './Dashboard/adminNavigation'

const AdminPanel = () => {
    return (
        <div className=' flex'>
            <AdminNavigation />
            <DashboardCharts />

        </div>
    )
}

export default AdminPanel