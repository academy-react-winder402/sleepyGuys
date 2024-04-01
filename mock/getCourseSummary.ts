import infoIcon from "@/public/icons/theme/info.svg";
import clockIcon from "@/public/icons/theme/clock.svg";
import calendarIcon from "@/public/icons/theme/calendar.svg";
import usersIcon from "@/public/icons/theme/users.svg";
import briefcaseIcon from "@/public/icons/theme/briefcase.svg";
import videoIcon from "@/public/icons/theme/video.svg";

export const getCourseSummary = () => {
  return [
    {
      id: 1,
      title: "وضعیت دوره",
      value: "تکمیل شده",
      icon: infoIcon,
    },
    {
      id: 2,
      title: "مدت زمان دوره",
      value: "۹۹ ساعت",
      icon: clockIcon,
    },
    {
      id: 3,
      title: "آخرین بروزرسانی",
      value: "1402/10/15",
      icon: calendarIcon,
    },
    {
      id: 4,
      title: "روش پشتیبانی",
      value: "گروه تلگرامی",
      icon: usersIcon,
    },
    {
      id: 5,
      title: "پیش نیاز",
      value: "HTML,CSS,JS",
      icon: briefcaseIcon,
    },
    { id: 6, title: "نوع مشاهده", value: "آنلاین", icon: videoIcon },
  ];
};
