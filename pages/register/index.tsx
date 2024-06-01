import RegisterBox from "@/components/Templates/Register/RegisterBox";
import React from "react";

export default function Register() {
  return <RegisterBox />;
}

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