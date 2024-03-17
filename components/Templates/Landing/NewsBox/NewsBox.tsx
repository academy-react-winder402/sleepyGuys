import Slider from "@/components/Modules/Slider/Slider";
import React from "react";

export default function NewsBox() {
  return (
    <div className="mt-36 text-center">
      <h1 className="font-peyda text-[35px] text-primary dark:text-primary-lighter mb-10">
        آخرین اخبار
      </h1>
      <Slider />
    </div>
  );
}
