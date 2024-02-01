import React from 'react'

const Clips = () => {
  return (
    <div className="bg-white grid grid-cols-3 gap-2 p-4 rounded-lg mt-2">
          <div className='overflow-hidden h-[280px] rounded-lg bg-black'>
            <img src="https://picsum.photos/400?1" alt="" className='h-full w-full object-cover'/>
          </div>
          <div className='overflow-hidden h-[280px] rounded-lg bg-black'>
            <img src="https://picsum.photos/400?2" alt="" className='h-full w-full object-cover'/>
          </div>
          <div className='overflow-hidden h-[280px] rounded-lg bg-black'>
            <img src="https://picsum.photos/400?3" alt="" className='h-full w-full object-cover'/>
          </div>
          <div className='overflow-hidden h-[280px] rounded-lg bg-black'>
            <img src="https://picsum.photos/400?4" alt="" className='h-full w-full object-cover'/>
          </div>
    </div>
  )
}

export default Clips