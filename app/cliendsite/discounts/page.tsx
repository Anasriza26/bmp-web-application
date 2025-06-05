import Sidebar from '@/components/Sidebar/sidebar'
import Discounts from "@/components/pages/discounts";


import React from 'react'

const page = () => {
  return (<>
  <div className="flex flex-col lg:flex-row">
    <Sidebar />
    <Discounts />
  </div>
  </>
  )
}

export default page