import Categoris from "@/components/Templates/Landing/Categories/Categories";
import HeroBox from "@/components/Templates/Landing/Hero/HeroBox";
import NewCoursesBox from "@/components/Templates/Landing/NewCourses/NewCoursesBox";
import NewsBox from "@/components/Templates/Landing/News/NewsBox";
import ServiceBox from "@/components/Templates/Landing/Services/ServicesBox";
import React from "react";

export default function Home() {
  return (
    <>
      <HeroBox />
      <Categoris />
      <NewCoursesBox />
      <NewsBox />
      <ServiceBox />
    </>
  );
}
