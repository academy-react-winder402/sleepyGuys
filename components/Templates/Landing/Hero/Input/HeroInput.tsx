import React from "react";
import { Input } from "@nextui-org/react";

function HeroInput() {
  return (
    <>
      <Input
        radius="lg"
        className="font-vazir border-[1px] border-solid border-primary dark:border-primary-lighter rounded-[20px]"
        classNames={{
          inputWrapper: [
            "border-1px border-solid border-primary dark:border-primary-lighter rounded-[20px]",
          ],
        }}
        placeholder="دنبال چه دوره ای هستی ..."
      />
    </>
  );
}

export default HeroInput;
