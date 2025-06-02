import Sidebar from '@/components/Sidebar/sidebar'
import Slots from '@/components/sections/slots'
import React from 'react'

const page = () => {
  return (<>
  <div className="flex flex-col lg:flex-row">
    <Sidebar />
    <Slots/>

  </div>
  </>
  )
}

export default page