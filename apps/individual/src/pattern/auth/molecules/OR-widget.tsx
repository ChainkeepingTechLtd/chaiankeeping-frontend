import React from 'react'

const OrWidget = () => {
  return (
    <div className='relative w-full h-6 flex items-center'>
          <hr className="w-full h-[2px] border-t" />
          <span className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white h-full w-[39px] flex items-center justify-center text-base font-medium font-dmsans'>OR</span>
    </div>
  )
}

export default OrWidget