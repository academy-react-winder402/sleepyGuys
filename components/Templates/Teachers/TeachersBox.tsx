import MainStepper from "@/components/Modules/Stepper/MainStepper";
import { useGetTeachersApi } from "@/hooks/api/useTeachersApi";
import TeacherCardBox from "./TeacherCardBox";
import TeacherCard from "@/components/Modules/TeacherCard/TeacherCard";
import SkeletonTeacherCard from "@/components/Modules/TeacherCard/SkeletonTeacherCard"

export default function TeachersBox() {
  const { data, isLoading } = useGetTeachersApi();
  
  return (
    <div className="flex items-start w-full justify-center">
      <MainStepper steps={data?.length ?? Array.from({ length: 6 }).length} />
      <TeacherCardBox data={data ?? Array.from({ length: 6 })} Content={isLoading ? SkeletonTeacherCard : TeacherCard} />
    </div>
  );
}

