import Image from "next/image";
import React from "react";
import dashboard from "@/public/pictures/userPanel/p1.svg";
import courses from "@/public/pictures/userPanel/p2.svg";
import tikets from "@/public/pictures/userPanel/p3.svg";
import profile from "@/public/pictures/userPanel/p4.svg";
import exite from "@/public/pictures/userPanel/p5.svg";
import navbarLogo from "@/public/icons/logo/navbarLogo.svg";
import Link from "next/link";

function Sidedar() {
  return (
    <div className="bg-white dark:bg-dark-lighter w-[30%] h-[90vh] p-10 rounded-3xl flex flex-col gap-10">
      <div className="flex items-center gap-x-10 p-5">
        <Image
          src={navbarLogo}
          priority={true}
          alt=""
          className="scale-150"
          style={{ width: "auto" }}
        />
        <p className="font-kalamehBlack text-lightTitle dark:text-darkTitle text-[25px]">
          آکادمی سپهر
        </p>
      </div>
      <ul className="text-[16px] text-lightBody dark:text-darkBody font-peyda flex flex-col gap-5">
        <li >
          <Link className="flex gap-2 items-center" href={"/userpanel"}> 
          <span className="w-10">
            <Image
              src={dashboard}
              priority={true}
              alt=""
              className="scale-80"
              style={{ width: "auto" }}
            />
            
          </span>
          پیشخوان
          </Link> 
        </li>
        <li>
        <Link className="flex gap-2 items-center" href={"/userpanel/myCourses"}>
          <span className="w-10">
            <Image
              src={courses}
              priority={true}
              alt=""
              className="scale-80"
              style={{ width: "auto" }}
            />
          </span>
          دوره های من
          </Link>
        </li>
        <li>
        <Link className="flex gap-2 items-center" href={"/userpanel/myTikets"}>
          <span className="w-10">
            <Image
              src={tikets}
              priority={true}
              alt=""
              className="scale-80"
              style={{ width: "auto" }}
            />
          </span>
          تیکت ها
          </Link>
        </li>
        <li>
        <Link className="flex gap-2 items-center" href={"/userpanel/myprofile"}>
          <span className="w-10">
            <Image
              src={profile}
              priority={true}
              alt=""
              className="scale-80"
              style={{ width: "auto" }}
            />
          </span>

          پروفایل
          </Link>
        </li>
        <li>
        <Link className="flex gap-2 items-center" href={"/"}>
          <span className="w-10">
            <Image
              src={exite}
              priority={true}
              alt=""
              className="scale-80"
              style={{ width: "auto" }}
            />
          </span>
          خروج
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidedar;
