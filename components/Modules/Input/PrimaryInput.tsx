import { primaryInput } from "@/interfaces/primaryInput.interface";
import { Input } from "@nextui-org/react";
import React from "react";

export default function PrimaryInput({
  placeholder,
  variant,
  className,
  register,
}: primaryInput) {
  return (
    <Input
      className={className}
      variant={variant}
      classNames={{
        input: ["placeholder:text-lightBody", "dark:placeholder:text-darkBody"],
        mainWrapper: ["overflow-hidden", "rounded-[20px]"],
        inputWrapper: [
          "!duration-500",
          "transition",
          "ease-in-out",
          "overflow-hidden",
          "rounded-[20px]",
          "py-8",
          "bg-white",
          "dark:bg-dark-lighter",
          "group-data-[focus=true]:bg-white",
          "dark:group-data-[focus=true]:bg-dark-lighter",
        ],
      }}
      placeholder={placeholder}
      {...register}
    />
  );
}
