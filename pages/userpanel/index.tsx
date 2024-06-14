import React from 'react'
import UserPanelTopNavigation from './TopBar/TopBar'
import UserPanelLayout from "@/layouts/UserPanelLayout"
import DashboardCard from "@/components/Templates/UserPanel/DashbordCard/DashboardCard"

function index() {
  return (
    <div className="grid grid-cols-2 gap-10">
      <DashboardCard/>
      <DashboardCard/>
      <DashboardCard/>
      <DashboardCard/>
    </div>
  )
}

export default index