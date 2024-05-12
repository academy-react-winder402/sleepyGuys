import MainBreadcrumb from "@/components/Modules/Breadcrumb/MainBreadcrumb";
import { useRouter } from "next/router";
import TeacherDetailBox from "@/components/Templates/MainTeacher/TeacherDetailBox";
import React from "react";
import { getSingleTeacheInfo } from "@/mock/getSingleTeacheInfo";
import TeacherCourses from "@/components/Templates/MainTeacher/TeacherCourses";
import SuggestedTeacherCard from "@/components/Templates/MainTeacher/SuggestedTeacherCard";
import { getSuggestedTeacher } from "@/mock/getSuggestedTeahcer";

function TeacherName() {
  const router = useRouter();
  const name: any = router.query.teacherName;
  return (
    <>
      <MainBreadcrumb
        items={[
          { id: 1, route: "/teachers", title: "استاد ها" },
          { id: 2, route: `/teachers/${name}`, title: name },
        ]}
      />
      <TeacherDetailBox data={getSingleTeacheInfo()} />
      <TeacherCourses />
      <SuggestedTeacherCard data={getSuggestedTeacher()} />
    </>
  );
}

export default TeacherName;
