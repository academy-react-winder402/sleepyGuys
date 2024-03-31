import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { CourseTitle } from "@/interfaces/courseTitleItem.interface";

export default function CourseHeadlinesBox({ data }: { data: CourseTitle[] }) {
  return (
    <Card
      className="shadow-2xl shadow-shadowColor dark:shadow-none p-6 dark:bg-dark-lighter"
      dir="rtl"
    >
      <CardHeader>
        <p className="font-kalamehBlack text-3xl text-primary dark:text-primary-lighter">
          سرفصل ها
        </p>
      </CardHeader>
      <CardBody className="text-right">
        <Accordion variant="splitted" className="font-vazir">
          {data.map((titleItem: CourseTitle) => (
            <AccordionItem
              className="!shadow-none !bg-mainBodyBg dark:!bg-dark"
              key={titleItem.id}
              aria-label={titleItem.title}
              title={titleItem.title}
            >
              {titleItem.title}
            </AccordionItem>
          ))}
        </Accordion>
      </CardBody>
    </Card>
  );
}
