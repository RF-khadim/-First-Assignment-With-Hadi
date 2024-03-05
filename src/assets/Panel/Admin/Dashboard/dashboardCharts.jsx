import React from 'react'
import DashboardCard from './dashboardComponents/DashboardCard'




const DashboardCharts = () => {
    return (
        <div className=' p-10'>
            <div className=' flex mx-10 my-12'>
                <DashboardCard
                    title="Weekly Sells"
                    text="Rs=50,000" />

                <DashboardCard
                    title=" Monthly Selles"
                    text="Rs=900,000" />


                <DashboardCard
                    title="Products Budget"
                    text="Rs=1800,000" />

                <DashboardCard
                    title="Per Day sells"
                    text="Rs=50,000" />


            </div>
        </div>
    )
}

export default DashboardCharts