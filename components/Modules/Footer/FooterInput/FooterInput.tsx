import React from "react";
import { Input } from "@nextui-org/react";

function FooterInput() {
  return (
    <>
      <Input
        className=""
        classNames={{
          input: [
            "text-black/90",
            "dark:text-white/90",
            "placeholder:text-default-700/50",
            "dark:placeholder:text-white/60",
            "font-vazir",
          ],
          mainWrapper: ["overflow-hidden"],
          inputWrapper: [
            "py-8",
            "rounded-t-2xl",
            "rounded-b-none",
            "bg-white-100",
            "dark:bg-dark-lighter",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-white-100",
            "dark:group-data-[focus=true]:bg-dark-lighter",
          ],
        }}
        placeholder="ایمیلت رو همینجا برامون بنویس..."
      />
    </>
  );
}

export default FooterInput;
