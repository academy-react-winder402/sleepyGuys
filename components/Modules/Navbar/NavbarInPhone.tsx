import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import bgNav from "@/public/icons/theme/Rectangle 1phoneNavbar.svg";
import Link from "next/link";
import dashboard from "@/public/icons/theme/dashboard.svg";
import courses from "@/public/icons/theme/courses.svg";
import tickets from "@/public/icons/theme/tickets.svg";
import profile from "@/public/icons/theme/profile.svg";

interface Route {
  name: string;
  href: string;
  icon: string;
}

interface NavbarInPhoneProps {
  mainRoutes: Route[];
}

const NavbarInPhone: React.FC<NavbarInPhoneProps> = ({ mainRoutse }) => {
  const pathname = usePathname();

  return (
    <div className="phoneNav relative -mb-2 xs:mb-0">
      <Image
        className="z-0 -mb-[70px]"
        src={bgNav}
        style={{
          width: "auto",
          height: "100px",
          display: "flex",
          justifyItems: "center",
        }}
      />
      <ul className="flex justify-around mb-4 text-small z-50">
        {mainRoutse.map((route, index) => {
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
