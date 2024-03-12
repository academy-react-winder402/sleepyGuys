import Image from "next/image";
import React from "react";
import navbarLogo from "@/public/icons/logo/navbarLogo.svg";
import Link from "next/link";
import ThemeSwitch from "@/components/Modules/Navbar/ThemeSwitch";
import { usePathname } from "next/navigation";
import NavbarInPhone from "./NavbarInPhone";
import navbarRoutesItems from "@/constants/navbarRoutesItems";
import AccountPopover from "../AccountPopover/AccountPopover";

function Navbar() {
  // " Ino chhera gozashti? "
  // const [windowWidth, setWindowWidth] = useState<number>(1000);

  // useEffect(() => {
  //   setWindowWidth(typeof window !== "undefined" ? window.innerWidth : 0);
  // }, [typeof window !== "undefined" ? window.innerWidth : 0]);

  const pathname = usePathname();

  return (
    <>
      <nav className="hidden mb-10 sm:flex items-center justify-between">
        <div className="flex items-center gap-x-10">
          <Image src={navbarLogo} alt="" width={55} height={25} />
          <ul className="flex items-center sm:gap-x-5 lg:gap-x-6 text-1xl">
            {navbarRoutesItems.map((route, index) => {
              const isActive = pathname.includes(route.href);
              return (
                <li
                  key={index}
                  className={
                    isActive
                      ? "text-black dark:text-white"
                      : "text-black-600 dark:text-white-600"
                  }
                >
                  <Link href={route.href}>{route.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className="flex flex-row-reverse items-center gap-x-2 md:gap-x-4"
          dir="ltr"
        >
          <ThemeSwitch />
          <AccountPopover />
        </div>
      </nav>
      <nav className="flex justify-center sm:hidden fixed bottom-3 px-3 w-full">
        <NavbarInPhone mainRoutes={navbarRoutesItems} />
      </nav>
    </>
  );
}

export default Navbar;
