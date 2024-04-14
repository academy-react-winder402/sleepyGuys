import {
  Card,
  Checkbox,
  Switch,
  AccordionItem,
  Accordion,
  CheckboxGroup,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import categoryItems from "@/constants/categories";
import { useRouter } from "next/router";

export default function CourseVerticalFilterBox() {
  const router = useRouter();

  const [isCompleted, setisCompleted] = useState<boolean>(false);

  const [isFree, setIsFree] = useState<boolean>(false);

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    if (categories.length > 0) {
      let categoriesFilterString = "";
      categories.forEach((category) => {
        categoriesFilterString += `${category}=true&`;
      });
      router.push(`/courses?${categoriesFilterString}`);
    }
  }, [categories]);

  return (
    <div className="w-[100%] md:w-[30%] lg:w-[22%] mb-6">
      <div className="flex bg-white p-4 rounded-xl flex-col gap-5 dark:bg-dark-lighter">
        <h2 className="font-peyda text-[18px] lg:text-[20px] text-lightTitle dark:text-darkTitle">
          فیلتر ها
        </h2>
        <Card
          className="shadow-none p-4 bg-mainBodyBg dark:bg-dark flex flex-row justify-between"
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
          className="shadow-none p-4 bg-mainBodyBg dark:bg-dark flex flex-row justify-between"
          dir="rtl"
        >
          <p>رایگان</p>
          <Switch
            defaultSelected
            isSelected={isFree}
            onValueChange={setIsFree}
          />
        </Card>
        <Accordion variant="splitted" className="font-vazir w-full px-0">
          <AccordionItem
            className="!shadow-none !bg-mainBodyBg dark:!bg-dark text-lightTitle dark:text-darkTitle"
            aria-label="دسته بندی دوره ها"
            title={<p className="text-sm lgb:text-lg">دسته بندی دوره ها</p>}
          >
            <CheckboxGroup
              value={categories}
              classNames={{
                wrapper: ["gap-y-4 pb-2"],
              }}
              onValueChange={setCategories}
              color="success"
            >
              {categoryItems.map((item, index) => (
                <Checkbox
                  key={index}
                  className="checkBoxContainer"
                  value={item.query}
                >
                  <p className="flex justify-between text-sm">{item.name}</p>
                </Checkbox>
              ))}
            </CheckboxGroup>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
