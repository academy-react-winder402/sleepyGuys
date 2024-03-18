import Categoris from "@/components/Templates/Landing/Categoris/Categoris";
import HeroBox from "@/components/Templates/Landing/HeroBox/HeroBox";
import NewCoursesBox from "@/components/Templates/Landing/NewCoursesBox/NewCoursesBox";
import NewsBox from "@/components/Templates/Landing/NewsBox/NewsBox";
import ServiceBox from "@/components/Templates/Landing/ServiceBox/ServiceBox";
import React from "react";

export default function Home() {
  return (
    <>
      <HeroBox/>
      <Categoris/>
      <NewCoursesBox/>
      <NewsBox/>
      <ServiceBox/>
    </>
  );
}
