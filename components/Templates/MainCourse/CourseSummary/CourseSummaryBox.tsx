import { courseSummary } from "@/interfaces/courseSummary.interface";
import React, { useState } from "react";
import CourseSummaryItem from "./CourseSummaryItem";

export default function CourseSummaryBox({ data }: { data: courseSummary[] }) {

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 lgb:grid-cols-3 gap-6">
      {data.map((item, index) => (
        <CourseSummaryItem {...item} key={index} />
      ))}
    </div>
  );
}
