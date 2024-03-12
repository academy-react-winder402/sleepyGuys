import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import bgNav from "@/public/icons/theme/Rectangle 1phoneNavbar.svg";
import Link from "next/link";
import { NavbarInPhoneProps } from "@/interfaces/navbarInPhone.interface";

const NavbarInPhone = ({ mainRoutes }: NavbarInPhoneProps) => {
  const pathname = usePathname();

  return (
    <div className="phoneNav relative -mb-2 xs:mb-0">
      <Image
        className="z-0 -mb-[70px]"
        alt=""
        src={bgNav}
        style={{
          width: "auto",
          height: "100px",
          display: "flex",
          justifyItems: "center",
        }}
      />
      <ul className="flex justify-around mb-4 text-small z-50">
        {mainRoutes.map((route, index) => {
          const isActive = pathname.includes(route.href);
          return (
            <li
              key={index}
              className={
                isActive
                  ? " text-white-100 flex items-center justify-center flex-col xs:gap-1"
                  : "text-white-400 flex items-center justify-center flex-col xs:gap-1"
              }
            >
              <Link className="xs:text-sm text-[9px]" href={route.href}>
                <Image src={route.icon} alt="" width={24} height={24} />
              </Link>
              <Link className="xs:text-sm text-[9px]" href={route.href}>
                {route.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavbarInPhone;
