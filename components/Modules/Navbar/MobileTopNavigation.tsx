import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import navbarLogo from "@/public/icons/logo/navbarLogo.svg";
import Image from "next/image";
import AccountPopover from "../AccountPopover/AccountPopover";

export default function MobileTopNavigation() {
  return (
    <nav className="flex sm:hidden items-center justify-between mb-10">
      <ThemeSwitch />
      <Image src={navbarLogo} alt="" width={55} height={25} />
      <AccountPopover />
    </nav>
  );
}
