import { Input } from "@nextui-org/react";
import React from "react";

export default function PrimaryInput({
  placeholder,
  variant,
  className,
  register,
}: {
  placeholder: string;
  variant: "bordered" | "faded" | "flat" | "underlined";
  className: string;
  register: any;
}) {
  return (
    <Input
      className={className}
      variant={variant}
      classNames={{
        input: ["placeholder:text-lightBody", "dark:placeholder:text-darkBody"],
        mainWrapper: ["overflow-hidden"],
        inputWrapper: [
          "rounded-[20px]",
          "py-8",
          "bg-white",
          "dark:bg-dark-lighter",
          "dark:hover:bg-gray-darker",
          "group-data-[focus=true]:bg-white",
          "dark:group-data-[focus=true]:bg-dark-lighter",
        ],
      }}
      placeholder={placeholder}
      {...register}
    />
  );
}
