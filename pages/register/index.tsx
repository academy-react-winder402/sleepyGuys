import RegisterBox from "@/components/Templates/Register/RegisterBox";
import { getProfileInfoApi } from "@/services/api/panelApi";
import { GetServerSideProps } from "next";
import React from "react";

export default function Register() {
  return <RegisterBox />;
}

export const getServerSideProps = (async (context) => {
  const { cookies } = context.req

  try {
    await getProfileInfoApi(cookies?.token);
    return {
      redirect: {
        destination: "/"
      },
      props: {}
    }

  } catch (error) {
    return {
      props: {},
    };
  }
}) satisfies GetServerSideProps