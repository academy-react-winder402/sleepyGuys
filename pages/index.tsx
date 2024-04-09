import BestSellingCoursesBox from "@/components/Templates/Landing/BestSellingCourses/BestSellingCoursesBox";
import Categories from "@/components/Templates/Landing/Categories/Categories";
import HeroBox from "@/components/Templates/Landing/Hero/HeroBox";
import NewCoursesBox from "@/components/Templates/Landing/NewCourses/NewCoursesBox";
import NewsBox from "@/components/Templates/Landing/News/NewsBox";
import ServiceBox from "@/components/Templates/Landing/Services/ServicesBox";
import React from "react";

export default function Home() {
  return (
    <>
      <HeroBox />
      <Categories />
      <NewCoursesBox />
      <NewsBox />
      <BestSellingCoursesBox />
      <ServiceBox />
    </>
  );
}
