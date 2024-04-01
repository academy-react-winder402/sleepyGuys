import { courseSummary } from "@/interfaces/courseSummary.interface";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import CourseSummaryItem from "./CourseSummaryItem";

export default function CourseSummaryBox({ data }: { data: courseSummary[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
      {data.map((item, index) => (
        <CourseSummaryItem {...item} key={index} />
      ))}
    </div>
  );
}
