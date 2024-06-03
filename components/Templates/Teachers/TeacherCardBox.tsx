import React from "react";
import TeacherCard from "@/components/Modules/TeacherCard/TeacherCard";
import { teachers } from "@/interfaces/teacher.interface";

function TeacherCardBox({
  data,
  Content,
}: {
  data: teachers[];
  Content: React.ElementType;
}) {
  return (
    <div className="flex justify-center items-center flex-col gap-10">
      {data?.map((teacher: any, index: any) => (
        <Content key={index} {...teacher} />
      ))}
    </div>
  );
}

export default TeacherCardBox;
