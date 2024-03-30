import React from 'react'

const ConformationModal = (Msg) => {
    return (
        <div className=''>

            <div className=' w-60 h-52 lg:w-96 lg:h-80 bg-slate-600 rounded-md  flex items-center justify-center text-white flex-col '>
                <p className=' text-center font-medium'>Msg={Msg}</p>
                <div className=' flex justify-evenly w-full mt-10'>
                    <button className='bg-white w-24 py-1 text-black font-medium rounded hover:bg-slate-900 hover:text-white transition-all duration-300'>Yes</button>
                    <button className='bg-white w-24 py-1 text-black font-medium rounded hover:bg-slate-900 hover:text-white transition-all duration-300'>Cancel</button>
                </div>


            </div>
        </div>
    )
}

export default ConformationModal