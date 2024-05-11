import MainBreadcrumb from "@/components/Modules/Breadcrumb/MainBreadcrumb";
import { useRouter } from "next/router";
import { getCourses } from "@/mock/getCourses";
import CourseCard from "@/components/Modules/CourseCard/CourseCard";
import TeacherDetailBox from "@/components/Templates/Teachers/TeacherDetiale/TeacherDetileBox";
import React from "react";

function TeacherName() {
  const router = useRouter();
  const name: any = router.query.teacherName;
  return (
    <>
      <MainBreadcrumb
        items={[
          { route: "teachers", title: "استاد ها" },
          { route: "teachers/", title: name },
        ]}
      />
      <TeacherDetailBox />
      <div className=" lg:-translate-y-[350px]  relative z-50">
        <div className="lg:text-darkTitle text-primary text-[40px] font-peyda font-bold flex justify-center mb-12">
          دوره های استاد
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lgb:grid-cols-4 gap-5">
          {getCourses()
            .slice(0, 4)
            .map((item, index) => (
              <div key={index}>
                <CourseCard {...item} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default TeacherName;
