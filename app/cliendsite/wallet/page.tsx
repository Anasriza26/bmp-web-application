import Sidebar from '@/components/Sidebar/sidebar'
import Wallet from '@/components/sections/wallet'
import React from 'react'

const page = () => {
  return (<>
  <div className="flex flex-col lg:flex-row">
    <Sidebar />
    <Wallet/>
  </div>
  </>
  )
}

export default page