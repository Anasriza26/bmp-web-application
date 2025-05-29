import Sidebar from '@/components/Sidebar/sidebar'
import Slotsrates from '@/components/sections/slotsrates'
import React from 'react'

const page = () => {
  return (<>
  <div className="flex flex-col lg:flex-row">
    <Sidebar />
    <Slotsrates />
  </div>
  </>
  )
}

export default page