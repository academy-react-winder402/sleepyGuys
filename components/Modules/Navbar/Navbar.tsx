import Image from "next/image";
import React from "react";
import navbarLogo from "@/public/icons/logo/navbarLogo.svg";
import Link from "next/link";

function Navbar() {
  return (
    <nav>
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
    </nav>
  );
}

export default Navbar;
