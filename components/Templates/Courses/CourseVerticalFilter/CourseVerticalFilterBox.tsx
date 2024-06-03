import {
  Card,
  Checkbox,
  Switch,
  AccordionItem,
  Accordion,
  CheckboxGroup,
  Skeleton,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useGetAllCourseLevelApi, useGetCourseTypesApi, useGetTechnologiesApi } from "@/hooks/api/useCoursesApi";
import { courseLevelProps } from "@/interfaces/courseLevel.interface";
import { courseTypesProps } from "@/interfaces/courseTypes.interface";
import { technologiesProps } from "@/interfaces/technologies.interface";
import { useGetTeachersApi } from "@/hooks/api/useTeachersApi";
import { teachers } from "@/interfaces/teacher.interface";

export default function CourseVerticalFilterBox() {
  const router = useRouter();

  const { pathname, query } = useRouter()

  const [isCompleted, setisCompleted] = useState<boolean>(false);

  const [isFree, setIsFree] = useState<boolean>(false);

  const [technologiesSelected, setTechnologiesSelected] = useState<string[]>([]);

  const [courseLevelSelected, setCourseLevelSelected] = useState<string[]>([])

  const [courseTypesSelected, setCourseTypesSelected] = useState<string[]>([])

  const [teachersSelected, setTeachersSelected] = useState<string[]>([])

  const getAllCourseLevel = useGetAllCourseLevelApi()
  const { data: courseLevelData, isLoading: courseLevelIsLoading } = getAllCourseLevel

  const getCourseTypes = useGetCourseTypesApi()
  const { data: courseTypesData, isLoading: courseTypesIsLoading } = getCourseTypes

  const getTechnologies = useGetTechnologiesApi()
  const { data: technologiesData, isLoading: technologiesIsLoading } = getTechnologies

  const getTeachers = useGetTeachersApi()
  const { data: teachersData, isLoading: teachersIsLoading } = getTeachers

  useEffect(() => {
    const newQuery = {
      ...query,
      ListTech: technologiesSelected
    }
    router.push({
      pathname,
      query: newQuery
    })
  }, [technologiesSelected]);

  useEffect(() => {
    const newQuery = {
      ...query,
      courseLevelId: courseLevelSelected
    }
    router.push({
      pathname,
      query: newQuery
    })
  }, [courseLevelSelected])

  useEffect(() => {
    const newQuery = {
      ...query,
      CourseTypeId: courseTypesSelected
    }
    router.push({
      pathname,
      query: newQuery
    })
  }, [courseTypesSelected])

  useEffect(() => {
    const newQuery = {
      ...query,
      TeacherId: teachersSelected
    }
    router.push({
      pathname,
      query: newQuery
    })
  }, [teachersSelected])
  return (
    <div className="w-[100%] md:w-[30%] lg:w-[22%] mb-6">
      <div className="grid grid-cols-2 md:grid-cols-1 bg-white p-4 rounded-xl gap-5 dark:bg-dark-lighter">
        <h2 className="col-span-2 md:col-span-1 font-peyda text-[18px] lg:text-[20px] text-lightTitle dark:text-darkTitle">
          فیلتر ها
        </h2>
        <Card
          className="shadow-none p-3 bg-mainBodyBg dark:bg-dark flex flex-row items-center justify-between gap-1"
          dir="rtl"
        >
          <p>تکمیل شده</p>
          <Switch
            defaultSelected
            isSelected={isCompleted}
            onValueChange={setisCompleted}
          />
        </Card>
        <Card
          className="shadow-none p-3 bg-mainBodyBg dark:bg-dark flex flex-row justify-between gap-1"
          dir="rtl"
        >
          <p>رایگان</p>
          <Switch
            defaultSelected
            isSelected={isFree}
            onValueChange={setIsFree}
          />
        </Card>
        <Accordion variant="splitted" className="font-vazir px-0">
          <AccordionItem
            className="!shadow-none !bg-mainBodyBg dark:!bg-dark text-lightTitle dark:text-darkTitle"
            aria-label="دسته بندی"
            title={<p className="text-sm lgb:text-lg">دسته بندی</p>}
          >
            {technologiesIsLoading ? <div className="space-y-3">{Array.from({ length: 4 }, (_, index) => (
              <Skeleton className="rounded-md h-[20px] w-2/3" key={index} />
            ))}</div> : <CheckboxGroup
              value={technologiesSelected}
              classNames={{
                wrapper: ["gap-y-4 pb-2"],
              }}
              onValueChange={setTechnologiesSelected}
              color="success"
            >
              {technologiesData.filter((item: technologiesProps) => item.parentId === null).map((item: technologiesProps, index: number) => (
                <Checkbox
                  key={index}
                  className="checkBoxContainer"
                  value={item.id.toString()}
                >
                  <p className="flex justify-between text-sm">{item.techName}</p>
                </Checkbox>
              ))}
            </CheckboxGroup>}
          </AccordionItem>
        </Accordion>
        <Accordion variant="splitted" className="font-vazir w-full px-0">
          <AccordionItem
            className="!shadow-none !bg-mainBodyBg dark:!bg-dark text-lightTitle dark:text-darkTitle"
            aria-label="سطح دوره ها"
            title={<p className="text-sm lgb:text-lg">سطح دوره</p>}
          >
            {courseLevelIsLoading ? <div className="space-y-3">{Array.from({ length: 3 }, (_, index) => (
              <Skeleton className="rounded-md h-[20px] w-2/3" key={index} />
            ))}</div> : <CheckboxGroup
              value={courseLevelSelected}
              classNames={{
                wrapper: ["gap-y-4 pb-2"],
              }}
              onValueChange={setCourseLevelSelected}
              color="success"
            >
              {courseLevelData.map((item: courseLevelProps, index: number) => (
                <Checkbox
                  key={index}
                  className="checkBoxContainer"
                  value={item.id.toString()}
                >
                  <p className="flex justify-between text-sm">{item.levelName}</p>
                </Checkbox>
              ))}
            </CheckboxGroup>}
          </AccordionItem>
        </Accordion>
        <Accordion variant="splitted" className="font-vazir w-full px-0">
          <AccordionItem
            className="!shadow-none !bg-mainBodyBg dark:!bg-dark text-lightTitle dark:text-darkTitle"
            aria-label="نوع دوره"
            title={<p className="text-sm lgb:text-lg">نوع دوره</p>}
          >
            {courseTypesIsLoading ? <div className="space-y-3">{Array.from({ length: 3 }, (_, index) => (
              <Skeleton className="rounded-md h-[20px] w-2/3" key={index} />
            ))}</div> : <CheckboxGroup
              value={courseTypesSelected}
              classNames={{
                wrapper: ["gap-y-4 pb-2"],
              }}
              onValueChange={setCourseTypesSelected}
              color="success"
            >
              {courseTypesData.map((item: courseTypesProps, index: number) => (
                <Checkbox
                  key={index}
                  className="checkBoxContainer"
                  value={item.id.toString()}
                >
                  <p className="flex justify-between text-sm">{item.typeName}</p>
                </Checkbox>
              ))}
            </CheckboxGroup>}
          </AccordionItem>
        </Accordion>
        <Accordion variant="splitted" className="font-vazir w-full px-0">
          <AccordionItem
            className="!shadow-none !bg-mainBodyBg dark:!bg-dark text-lightTitle dark:text-darkTitle"
            aria-label="اساتید"
            title={<p className="text-sm lgb:text-lg">اساتید</p>}
          >
            {teachersIsLoading ? <div className="space-y-3">{Array.from({ length: 4 }, (_, index) => (
              <Skeleton className="rounded-md h-[20px] w-2/3" key={index} />
            ))}</div> : <CheckboxGroup
              value={teachersSelected}
              classNames={{
                wrapper: ["gap-y-4 pb-2"],
              }}
              onValueChange={setTeachersSelected}
              color="success"
            >
              {teachersData.map((item: teachers, index: number) => (
                <Checkbox
                  key={index}
                  className="checkBoxContainer"
                  value={item.teacherId.toString()}
                >
                  <p className="flex justify-between text-sm">{item.fullName}</p>
                </Checkbox>
              ))}
            </CheckboxGroup>}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
