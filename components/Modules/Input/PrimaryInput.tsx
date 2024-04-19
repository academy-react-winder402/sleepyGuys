import { primaryInput } from "@/interfaces/primaryInput.interface";
import { Input } from "@nextui-org/react";
import React from "react";

export default function PrimaryInput({
  placeholder,
  variant,
  className,
  type = "text",
  register,
  hasBorder = true,
  startContent,
  endContent,
  errorMessage,
}: primaryInput) {
  return (
    <Input
      className={className}
      variant={variant}
      type={type}
      classNames={{
        input: ["placeholder:text-lightBody", "dark:placeholder:text-darkBody"],
        mainWrapper: ["overflow-hidden", "rounded-[16px]"],
        inputWrapper: [
          "!duration-500",
          "transition",
          "ease-in-out",
          "overflow-hidden",
          "rounded-[16px]",
          "py-8",
          "bg-white",
          "dark:bg-dark-lighter",
          "group-data-[focus=true]:bg-white",
          "dark:group-data-[focus=true]:bg-dark-lighter",
          `${!hasBorder && "border-none"}`,
        ],
      }}
      placeholder={placeholder}
      {...register}
      startContent={startContent}
      endContent={endContent}
      errorMessage={errorMessage}
    />
  );
}
