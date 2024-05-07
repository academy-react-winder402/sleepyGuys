import MainBreadcrumb from '@/components/Modules/Breadcrumb/MainBreadcrumb'
import { useRouter } from 'next/router';
import { getCourses } from "@/mock/getCourses";
import CourseCard from "@/components/Modules/CourseCard/CourseCard";
import TeacherDetailBox from "@/components/Templates/Teachers/TeacherDetiale/TeacherDetileBox";
import React from 'react'
import BoxHeader from '@/components/Modules/BoxHeader/BoxHeader';

function TeacherName() {
  const router = useRouter();
  const name : any = router.query.teacherName
  return (
    <>
      <MainBreadcrumb items={[{route: "teachers" , title: "استاد ها" } , {route: "teachers/" , title: name }]}/>
      <TeacherDetailBox/>
      <BoxHeader  title="دوره های استاد" hasLink={false}  />
      <div className=' grid grid-cols-4 gap-5'>
      {getCourses().slice(0,4).map((item, index) => (
        <div key={index}>
          <CourseCard {...item} />
        </div>
      ))}
      </div>
    </>
  )
}

export default TeacherName