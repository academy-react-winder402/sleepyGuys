import React from 'react'
import UserPanelTopNavigation from './TopBar/TopBar'
import UserPanelLayout from "@/layouts/UserPanelLayout"
import DashboardCard from "@/components/Templates/UserPanel/DashbordCard/DashboardCard"
import ticket from "@/public/pictures/userPanel/ticket-detailed-fill.svg"
import coursesCount from "@/public/pictures/userPanel/openlayers.svg"
import wallet from "@/public/pictures/userPanel/wallet-fill.svg"
import cash from "@/public/pictures/userPanel/cashapp.svg"

function index() {
  return (
    <div className="grid grid-cols-2 gap-10">
      <DashboardCard img={ticket}/>
      <DashboardCard img={coursesCount}/>
      <DashboardCard img={wallet}/>
      <DashboardCard img={cash}/>
    </div>
  )
}

export default index