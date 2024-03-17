import HeroBox from "@/components/Templates/Landing/HeroBox/HeroBox";
import NewCoursesBox from "@/components/Templates/Landing/NewCoursesBox/NewCoursesBox";
import NewsBox from "@/components/Templates/Landing/NewsBox/NewsBox";
import React from "react";

export default function Home() {
  return (
    <>
      <HeroBox/>
      <NewCoursesBox/>
      <NewsBox/>
    </>
  );
}
