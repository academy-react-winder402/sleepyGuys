import { Card } from "@nextui-org/react";
import React from "react";
import loginImage from "@/public/pictures/login/loginImage.svg";
import AuthenticationCard from "@/components/Modules/AuthenticationCard/AuthenticationCard";

export default function LoginBox() {
  return (
    <div className="flex items-center justify-center h-[100vhß]">
      <AuthenticationCard image={loginImage}>
        <p>hello word</p>
      </AuthenticationCard>
    </div>
  );
}
