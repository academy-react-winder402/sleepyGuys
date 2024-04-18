import { Card } from "@nextui-org/react";
import React from "react";
import loginImage from "@/public/pictures/login/loginImage.webp";
import Image from "next/image";

export default function LoginBox() {
  return (
    <Card>
      <Image src={loginImage} alt=""/>
    </Card>
  );
}
