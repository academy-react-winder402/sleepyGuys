import Image from "next/image";
import React from "react";

export default function dashboardCard({img} : any) {
  return (
    <div className="flex gap-8 items-center h-24 bg-white dark:bg-dark-lighter rounded-3xl">
      <div className="h-full w-24 bg-primary-darker
       rounded-xl -translate-y-6 -translate-x-4 flex items-center justify-center">
        <Image
          src={img}
          priority={true}
          alt=""
          className="h-full"
          style={{ width: "60%" }}
        />
      </div>
      <div className="flex flex-col gap-5">
        <p>مجموع پرداخت ها</p>
        <p>۱۹۵۰۰ تومان</p>
      </div>
    </div>
  );
}
