import { getProfileInfoApi } from '@/services/api/panelApi';
import { GetServerSideProps } from 'next';
import React from 'react'

export default function index() {
  return (
    <div className="font-kalamehBlack text-primary-darker text-3xl">تیکتی ایی وجود ندارد</div>
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