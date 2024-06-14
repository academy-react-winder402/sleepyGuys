import React, { useEffect, useState } from "react";
import navbarLogo from "@/public/icons/logo/navbarLogo.svg";
import Link from "next/link";
import ThemeSwitch from "@/components/Modules/Navbar/ThemeSwitch";
import Image from "next/image";
import navbarRoutesItems from "@/constants/navbarRoutesItems";
import { useRouter } from "next/router";
import AccountPopover from "@/components/Modules/AccountPopover/AccountPopover";
import userIcon from "@/public/icons/outlined/user.svg"
import { useGetProfileInfoApi } from "@/hooks/api/usePanelApi";
import { Spinner } from "@nextui-org/react";
import MainButton from "@/components/Modules/Button/MainButton";

export default function UserPanelTopNavigation() {
  const router = useRouter();
  const { asPath, pathname } = router;

  const { data, isLoading } = useGetProfileInfoApi()

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <nav className="hidden mb-10 sm:flex items-center justify-between bg-white dark:bg-dark-lighter rounded-3xl p-5">
        {isMounted ?
     <>
      <div className="flex items-center gap-x-10 font-kalamehBlack text-lightTitle dark:text-darkTitle text-[25px]">
       محمد آقایی
      </div>
      <nav className="flex items-center gap-x-2 md:gap-x-4">
        <ThemeSwitch />
        {isLoading 
        ? 
        <Spinner /> 
        : 
        !data 
        ? 
        (
          <MainButton
            content={<p className="flex items-center gap-2 font-peyda"><span>ورود</span>|<span>عضویت</span></p>}
            startIcon={<Image src={userIcon} alt="" />}
            className="bg-primary dark:bg-primary-darker font-peyda text-btnText rounded-2xl"
            onClick={() => router.push({
              pathname: "/login",
              query: {
                callbackUrl: asPath
              }
            })}
          />
        ) 
        : 
        <AccountPopover />
        }
      </nav>
     </>
      :null}
    </nav>
  );
}