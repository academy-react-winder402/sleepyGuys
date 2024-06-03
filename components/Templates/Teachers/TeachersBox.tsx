import MainStepper from "@/components/Modules/Stepper/MainStepper";
import { useGetTeachersApi } from "@/hooks/api/useTeachersApi";
import TeacherCardBox from "./TeacherCardBox";
import TeacherCard from "@/components/Modules/TeacherCard/TeacherCard";
import SkeletonTeacherCard from "@/components/Modules/TeacherCard/SkeletonTeacherCard"

export default function TeachersBox() {
  const getTeachers = useGetTeachersApi();
  const { data, isLoading } = getTeachers;
  return (
    <div className="flex items-start w-full">
      <MainStepper steps={data?.length ?? Array.from({ length: 6 }).length} />
      {/* <div className="flex justify-center items-center flex-col gap-10">
        {data?.map((teacher: any, index: any) => (
          <TeacherCard key={index} {...teacher} />
        ))}
      </div> */}
      <TeacherCardBox data={data ?? Array.from({ length: 6 })} Content={isLoading ? SkeletonTeacherCard : TeacherCard} />
    </div>
  );
}

