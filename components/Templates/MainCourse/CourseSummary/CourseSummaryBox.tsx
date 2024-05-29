import { courseSummary } from "@/interfaces/courseSummary.interface";
import React from "react";
import CourseSummaryItem from "./CourseSummaryItem";
import { calculateTimePassed } from "@/utils/calculateTimePassed";
import infoIcon from "@/public/icons/theme/info.svg";
import clockIcon from "@/public/icons/theme/clock.svg";
import calendarIcon from "@/public/icons/theme/calendar.svg";
import usersIcon from "@/public/icons/theme/users.svg";
import starIcon from "@/public/icons/outlined/star.svg";
import videoIcon from "@/public/icons/theme/video.svg";
import SkeletonCourseSummaryItem from "./SkeletonCourseSummaryItem";
import convertToPersianDigit from "@/utils/convertToPersianDigit";

export default function CourseSummaryBox({ courseLevelName, courseStatusName, currentRate, endTime, startTime, lastUpdate, typeName, isLoading }: courseSummary) {
  const summaryItem = [
    { title: "وضعیت دوره", value: courseStatusName, icon: infoIcon },
    { title: "مدت زمان دوره", value: convertToPersianDigit(calculateTimePassed(startTime, endTime)), icon: clockIcon },
    { title: "آخرین بروزرسانی", value: "۲ روز پیش", icon: calendarIcon },
    { title: "سطح دوره", value: courseLevelName, icon: usersIcon },
    { title: "امتیاز", value: `۵/${convertToPersianDigit(currentRate)} `, icon: starIcon },
    { title: "نوع مشاهده", value: "آنلاین", icon: videoIcon }
  ]
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 lgb:grid-cols-3 gap-6">
      {summaryItem.map((item, index) => (
        isLoading ? <SkeletonCourseSummaryItem title={item.title} icon={item.icon} key={index} /> : <CourseSummaryItem {...item} key={index} />
      ))}
    </div>
  );
}
