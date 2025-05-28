import Sidebar from '@/components/Sidebar/sidebar'
import Bookings from '@/components/sections/bookings'
import React from 'react'

const page = () => {
  return (<>
  {/* <div className="flex flex-row">
    <Sidebar />
    <Bookings />
  </div> */}

<div className="flex flex-col lg:flex-row">
  <Sidebar />
  <Bookings />
</div>
  
  
  </>
  )
}

export default page