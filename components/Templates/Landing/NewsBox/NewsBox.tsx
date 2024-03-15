import Slider from "@/components/Modules/Slider/Slider";
import React from "react";

export default function NewsBox() {
  return (
    <div className="mt-36 text-center">
      <h1 className="font-peyda text-[50px] text-primary dark:text-primary-lighter mb-8">
        آخرین اخبار
      </h1>
      <Slider />
    </div>
  );
}
