import React from "react";
import { Input } from "@nextui-org/react";

function FooterInput() {
  return (
    <>
      <Input
        radius="lg"
        classNames={{
          input: [
            "col-span-2",
            "pr-0",
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            "font-vazir",
          ],
          base: ["col-span-2"],
          mainWrapper: ["rounded-[0px]", "bg-white-100" , "overflow-hidden" , "dark:bg-dark"],
          innerWrapper: ["bg-transparent"],
          inputWrapper: [
            "py-8",
            "rounded-[0px]",
            "shadow-xl",
            "bg-white",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="yourGmail@gmail.com"
      />
    </>
  );
}

export default FooterInput;
