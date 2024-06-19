import React from 'react'
import DashboardCard from "@/components/Templates/UserPanel/DashbordCard/DashboardCard"
import ticket from "@/public/pictures/userPanel/ticket-detailed-fill.svg"
import coursesCount from "@/public/pictures/userPanel/openlayers.svg"
import wallet from "@/public/pictures/userPanel/wallet-fill.svg"
import cash from "@/public/pictures/userPanel/cashapp.svg"
import { GetServerSideProps } from 'next'
import { getProfileInfoApi } from '@/services/api/panelApi'

function UserPanelDashboard() {
  return (
    <div className="grid grid-cols-2 gap-10 pt-5">
      <DashboardCard img={ticket} />
      <DashboardCard img={coursesCount} />
      <DashboardCard img={wallet} />
      <DashboardCard img={cash} />
    </div>
  )
}


export const getServerSideProps = (async (context) => {
  const { cookies } = context.req

  try {
    await getProfileInfoApi(cookies?.token);
    return {
      props: {}
    }

  } catch (error) {
    return {
      redirect: {
        destination: "/"
      },
      props: {},
    };
  }
}) satisfies GetServerSideProps

export default UserPanelDashboard
