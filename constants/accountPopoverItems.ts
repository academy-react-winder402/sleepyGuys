import dashboard from "@/public/icons/theme/dashboard.svg";
import courses from "@/public/icons/theme/courses.svg";
import tickets from "@/public/icons/theme/tickets.svg";
import profile from "@/public/icons/theme/profile.svg";
import { AccountPopoverItem } from "@/interfaces/accountPopover.interface";

const accountPopoverItems: AccountPopoverItem[] = [
  { label: "داشبورد", route: "userpanel", icon: dashboard },
  { label: "دوره ها", route: "userpanel/myCourses", icon: courses },
  { label: "تیکت ها", route: "userpanel/myTikets", icon: tickets },
  { label: "پروفایل کاربری", route: "userpanel/myprofile", icon: profile },
];

export default accountPopoverItems;
