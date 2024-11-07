import React from 'react'

function Loader() {
  return (
    <div className=' absolute top-0 left-0 flex items-center justify-center bg-blue-50 bg-opacity-40 w-full h-full '>
        <div class="w-20 h-20 z-50 border-8 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
    </div>
  )
}

export default Loader