import Sidebar from '@/components/Sidebar/sidebar'
import TurfPage from '@/components/pages/turfpage'
import React from 'react'

const page = () => {
  return (<>
  <div className="flex flex-col lg:flex-row">
    <Sidebar />
    <TurfPage/>
  </div>
  </>
  )
}

export default page