import MainButton from "@/components/Modules/Button/MainButton";
import { Card, CardBody, CardHeader, ScrollShadow } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { CourseTitle } from "@/interfaces/courseTitleItem.interface";

export default function CourseHeadlinesBox({ data }: { data: CourseTitle[] }) {
  console.log(data);
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

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
        <Accordion variant="splitted">
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
