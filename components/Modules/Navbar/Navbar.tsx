import Image from "next/image";
import React, { useState } from "react";
import navbarLogo from "@/public/icons/logo/navbarLogo.svg";
import Link from "next/link";
import { Avatar, AvatarIcon } from "@nextui-org/avatar";
import { Switch } from "@nextui-org/react";
import moonIcon from "@/public/icons/theme/moon.svg";
import sunIcon from "@/public/icons/theme/sun.svg";

function Navbar() {
  const [isSelected, setIsSelected] = useState(true);

  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-x-6">
        <Image src={navbarLogo} alt="" width={45} height={22} />
        <ul className="flex items-center gap-x-8">
          <li>
            <Link href={"#"}>خانه</Link>
          </li>
          <li>
            <Link href={"#"}>دوره ها</Link>
          </li>
          <li>
            <Link href={"#"}>اساتید</Link>
          </li>
          <li>
            <Link href={"#"}>اخبار</Link>
          </li>
          <li>
            <Link href={"#"}>ارتباط با ما</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-row-reverse items-center gap-x-2" dir="ltr">
        <Switch
          isSelected={isSelected}
          onValueChange={setIsSelected}
          size="lg"
          color="default"
          thumbIcon={({ isSelected }) =>
            isSelected ? (
              <Image src={sunIcon} alt="" />
            ) : (
              <Image src={moonIcon} alt="" />
            )
          }
        />
        <Avatar
          icon={<AvatarIcon />}
          classNames={{
            base: "bg-[#436E8E]",
            icon: "text-white",
          }}
        />
      </div>
    </nav>
  );
}

export default Navbar;
