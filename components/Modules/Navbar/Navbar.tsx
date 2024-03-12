import Image from "next/image";
import React, { useEffect, useState } from "react";
import navbarLogo from "@/public/icons/logo/navbarLogo.svg";
import Link from "next/link";
import { Avatar, AvatarIcon } from "@nextui-org/avatar";
import {
  Button,
  Divider,
  Listbox,
  ListboxItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Switch,
} from "@nextui-org/react";
import logout from "@/public/icons/theme/logout.svg";
import userIcon from "@/public/icons/theme/user.svg";
import accountPopoverItems from "@/api/accountPopoverItems";
import { useRouter } from "next/router";
import ThemeSwitch from "@/components/Modules/Navbar/theme";
import { usePathname } from "next/navigation";
import mainRoutes1 from "@/api/fakeApi";
import NavbarInPhone from "./NavbarInPhone";

interface Route {
  name: string;
  href: string;
}

function Navbar() {
  const [windowWidth, setWindowWidth] = useState<number>(1000);
  const [mainRoutse, setMainRoutse] = useState<Route[]>(mainRoutes1);

  useEffect(() => {
    setWindowWidth(typeof window !== "undefined" ? window.innerWidth : 0);
  }, [typeof window !== "undefined" ? window.innerWidth : 0]);

  const router = useRouter();

  const pathname = usePathname();

  return (
    <>
      <nav className="hidden mb-10 sm:flex items-center justify-between">
        <div className="flex items-center gap-x-10">
          <Image src={navbarLogo} alt="" width={55} height={25} />
          <ul className="flex items-center sm:gap-x-5 lg:gap-x-6 text-1xl">
            {mainRoutse.map((route, index) => {
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
          <Popover offset={15} placement="bottom-start" backdrop={"blur"}>
            <PopoverTrigger>
              <div className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 bg-primary rounded-full">
                <Image
                  className="scale-85 md:scale-100"
                  src={userIcon}
                  alt=""
                  width={28}
                  height={12}
                />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-[340px] items-start rounded-tl-none p-6">
              <div className="flex gap-x-4">
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-primary rounded-full">
                  <Image
                    className="scale-85 md:scale-100"
                    src={userIcon}
                    alt=""
                    width={38}
                    height={18}
                  />
                </div>
                <div>
                  <p className="text-lg font-bold text-primary mb-1">
                    آرمان غنی زاده
                  </p>
                  <p className="text-xs text-black-500">موجودی : ۰ تومان</p>
                </div>
              </div>
              <Divider className="my-3" />
              <div className="w-full flex flex-col">
                <Listbox onAction={(key) => router.push(`/${key}`)}>
                  {accountPopoverItems.map((item) => (
                    <ListboxItem key={item.route} className="py-4">
                      <div className="flex items-center gap-x-3">
                        <Image src={item.icon} alt="" width={24} height={24} />
                        <p className="text-sm text-black-500">{item.label}</p>
                      </div>
                    </ListboxItem>
                  ))}
                </Listbox>
                <Divider className="my-4" />
                <div className="flex items-center justify-center gap-x-1 text-md font-bold">
                  <Image
                    className="scale-85"
                    src={logout}
                    alt=""
                    width={30}
                    height={30}
                  />
                  <p>خروج از حساب </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </nav>
      <nav className="flex justify-center sm:hidden fixed bottom-3 px-3 w-full"> 
        <NavbarInPhone mainRoutse={mainRoutse} />
      </nav>
    </>
  );
}

export default Navbar;
