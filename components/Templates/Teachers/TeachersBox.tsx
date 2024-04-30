import TeacherCard from "@/components/Modules/TeacherCard/TeacherCard";
import { teachers } from "@/interfaces/teacher.interface";
import { getTeachers } from "@/mock/getTeachers";
import React from "react";

export default function TeachersBox() {
  return (
    <div className="flex justify-center items-center flex-col gap-10">
      {getTeachers().map((teacher:teachers, index: number) => (
        <TeacherCard key={index} {...teacher} />
      ))}
    </div>
  );
}