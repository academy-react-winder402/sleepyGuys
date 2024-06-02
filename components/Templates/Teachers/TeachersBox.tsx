import MainStepper from "@/components/Modules/Stepper/MainStepper";
import TeacherCard from "@/components/Modules/TeacherCard/TeacherCard";
import { useGetTeachersApi } from "@/hooks/api/useTeachersApi";

export default function TeachersBox() {
  const getTeachers = useGetTeachersApi();
  const { data, isLoading } = getTeachers;
  console.log(data);
  return (
    <div className="flex items-start">
      <MainStepper steps={data?.length} />
      <div className="flex justify-center items-center flex-col gap-10">
        {data?.map((teacher : any , index : any) => (
          <TeacherCard key={index} {...teacher} />
        ))}
      </div>
    </div>
  );
}

