import LoginBox from "@/components/Templates/Login/LoginBox";
import { getProfileInfoApi } from "@/services/api/panelApi";
import { GetServerSideProps } from "next";
import React from "react";

function Login() {
  return <LoginBox />;
}

export default Login;

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

  } catch (error: any) {
    console.log(error);
  }

  return {
    props: {},
  };
}) satisfies GetServerSideProps