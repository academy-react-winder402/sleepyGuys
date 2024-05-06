import MainStepper from "@/components/Modules/Stepper/MainStepper";
import TeacherCard from "@/components/Modules/TeacherCard/TeacherCard";
import { getTeachers } from "@/mock/getTeachers";
import React from "react";

export default function TeachersBox() {
  return (
    <div className="flex items-start">
      <MainStepper steps={3} />
      <div className="flex justify-center items-center flex-col gap-10">
        {getTeachers().map((teacher, index) => (
          <TeacherCard key={index} {...teacher} />
        ))}
      </div>
    </div>
  );
}
