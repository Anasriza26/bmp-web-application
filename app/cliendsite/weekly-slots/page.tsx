import Sidebar from '@/components/Sidebar/sidebar'
import Slotsandrates from '@/components/sections/slotsandrates'
import React from 'react'

const page = () => {
  return (<>
  <div className="flex flex-col lg:flex-row">
    <Sidebar />
    <Slotsandrates />
  </div>
  </>
  )
}

export default page