import React from 'react'

const DashboardDetailsCard = ({ value, heading, icon, today, totalValue }) => {
    return (
        <div>
            <div className=' h-60 lg:h-64 w-60 lg:w-64  display flex items-center justify-center p-3 bg-gradient-to-t from-slate-800 to-slate-600 rounded-md' >
                <div className='flex flex-col justify-center text-center gap-1'>
                    <h1 className='font-bold text-2xl text-white'>{heading}</h1>

                    <p className='text-white font-medium '>{totalValue}</p>

                    <div className='text-slate-900 text-6xl ml-14 w-24 h-24 bg-white pl-4 pt-4 rounded-full mt-2'>{icon}</div>

                    <div className='flex flex-col justify-between text-white font-medium w-52 mt-2 border-t-2 border-white'>
                        <div className='text-lg'>{today}</div>
                        <div className='text-lg'>{value}</div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default DashboardDetailsCard