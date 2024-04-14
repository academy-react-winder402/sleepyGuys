import {
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  CheckboxGroup,
} from "@nextui-org/react";
import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import categoryItems from "@/constants/categories";
import { Switch } from "@nextui-org/react";
import Categories from "../../Landing/Categories/Categories";

export default function CourseVerticalFilterBox() {
  const [complete, setComplete] = useState<boolean>(false);
  const [free, setFree] = useState<boolean>(false);
  const [categories, setCategories] = useState<string[]>([])

  console.log(complete);

  const compeleteHandler = () => {
    setComplete(!complete);
  };

  const freeHandler = () => {
    setFree(!free);
  };

  const selectCategoris = (name: any , event : any) => {
    console.log(name , event);
    if(event){
      setCategories([...categories, name]);
    }else{
      setCategories(categories.filter(item => item !== name))
    }
  };

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
            aria-label="Automatic updates"
            onValueChange={compeleteHandler}
          />
        </Card>
        <Card
          className="shadow-none p-4 bg-mainBodyBg dark:bg-dark flex flex-row justify-between"
          dir="rtl"
        >
          <p>رایگان</p>
          <Switch
            defaultSelected
            aria-label="Automatic updates"
            onValueChange={freeHandler}
          />
        </Card>
        <Accordion variant="splitted" className="font-vazir w-full px-0">
          <AccordionItem
            className="!shadow-none !bg-mainBodyBg dark:!bg-dark text-lightTitle dark:text-darkTitle"
            aria-label="دسته بندی دوره ها"
            title={<p className="text-sm lgb:text-lg">دسته بندی دوره ها</p>}
          >
            <div className="flex flex-col gap-4">
              {categoryItems.map((item, index) => (
                <Checkbox
                  key={item.id}
                  color="success"
                  className="checkBoxContainer"
                  onValueChange={(e) => selectCategoris(item.name , e)}
                >
                  <p className="flex justify-between text-sm">{item.name}</p>
                </Checkbox>
              ))}
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
