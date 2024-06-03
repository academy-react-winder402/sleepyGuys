import LoginBox from "@/components/Templates/Login/LoginBox";
import React from "react";

function Login() {
  return <LoginBox />;
}

export default Login;

export const getServerSideProps = ((context: any) => {
  const { req } = context

  const token = req.cookies?.token

  if (token) {
    return {
      redirect: {
        destination: "/"
      },
    }
  }
  return {
    props: {}
  }
})