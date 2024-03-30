import React from 'react'
import { FaUsers } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { IoStatsChartSharp } from "react-icons/io5";
import DashboardDetailsCard from '../dashboardComponents/DashboardDetailsCard'

const Dashboard = () => {
  return (
    <div className=' w-full h-screen px-6'>


      <div className='flex flex-1'>

        <div className='px-16 py-10 w-full flex justify-center'>
          <div className='lg:w-[1200px] md:w-[500px] w-450px h-auto rounded-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>

            <DashboardDetailsCard
              heading={"Total Products"}
              totalValue={569}
              icon={<IoStatsChartSharp />}
              today={"Today's sell"}
              value={32}
            />

            <DashboardDetailsCard
              heading={"Customers"}
              totalValue={"30,000"}
              icon={<FaUsers />}
              today={"Today's Customers"}
              value={21}
            />

            <DashboardDetailsCard
              heading={"Pending Orders"}
              totalValue={"12"}
              icon={<MdOutlinePendingActions />}
              today={"Today's Pend-orders"}
              value={3}
            />

            <DashboardDetailsCard
              heading={"Monthly Income"}
              totalValue={"520,000 Rsupees"}
              icon={<FaMoneyBill1Wave />}
              today={"Today's Income"}
              value={"95,000"}
            />

          </div>
        </div>
        {/* End of the top bar Details of Admin dashboard */}
        <div>

        </div>
      </div>

      {/* after cards having a parent div to hold the graphs */}
      <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-3'>
        <div className='lg:w-auto w-[500px] h-auto bg-red-600 mx-auto p-3 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quidem ipsum accusantium, obcaecati nisi impedit in dolores reiciendis tempore, suscipit eligendi voluptate cumque exercitationem quasi nulla repudiandae earum id laboriosam.
        </div>

        <div className='lg:w-auto w-[500px] h-auto bg-red-600 mx-auto p-3 '>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt consequatur delectus debitis totam! Modi minus libero laborum velit temporibus sint. Maxime eos repellat consequuntur voluptate ratione tempora rem, qui odio?
        </div>
      </div>
    </div >
  )
}

export default Dashboard