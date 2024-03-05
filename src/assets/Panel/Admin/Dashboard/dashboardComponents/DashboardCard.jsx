import React from 'react'

const DashboardCard = (prop) => {
    return (
        <div className='h-60 w-80 border-gray-300 border-[4px] rounded-md m-2 bg-gray-200'>
            <h1 className='text-2xl align-top text-center font-bold mt-4'>{prop.title}</h1>
            <p className=' text-lg font-medium text-center mt-10'>{prop.text}</p>
        </div>

    )
}

export default DashboardCard