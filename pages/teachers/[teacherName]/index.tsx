import MainBreadcrumb from "@/components/Modules/Breadcrumb/MainBreadcrumb";
import { useRouter } from "next/router";
import TeacherDetailBox from "@/components/Templates/MainTeacher/TeacherDetileBox";
import React from "react";
import { getSingleTeacheInfo } from "@/mock/getSingleTeacheInfo";
import TeacherCourses from "@/components/Templates/MainTeacher/TeacherCourses";

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
    </>
  );
}

export default TeacherName;
