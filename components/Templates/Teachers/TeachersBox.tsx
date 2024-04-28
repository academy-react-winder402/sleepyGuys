import TeacherCard from "@/components/Modules/TeacherCard/TeacherCard";
import React from "react";

export default function TeachersBox({ data }: any) {
  return (
    <div className="grid grid-cols-2">
      {data.map((teacher: any, index: number) => (
        <TeacherCard key={index} />
      ))}
    </div>
  );
}
