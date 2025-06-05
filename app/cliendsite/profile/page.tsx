import Sidebar from '@/components/Sidebar/sidebar'
import Profile from '@/components/pages/profile' 
import React from 'react'

const page = () => {
  return (<>
  <div className="flex flex-col lg:flex-row">
    <Sidebar /> 
    <Profile />
  </div>
  </>
  )
}

export default page