import dashboard from "@/public/icons/theme/phoneMode/dashboard.svg";
import courses from "@/public/icons/theme/phoneMode/courses.svg";
import teachers from "@/public/icons/theme/phoneMode/teachers.svg";
import contact from "@/public/icons/theme/phoneMode/contact.svg";
import news from "@/public/icons/theme/phoneMode/news.svg";
import { NavbarRouteItem } from "@/interfaces/navbarRouteItem.interface";

const navbarRoutesItems: NavbarRouteItem[] = [
  { name: "خانه", href: "/", icon: dashboard },
  { name: "دوره ها", href: "/courses", icon: courses },
  { name: "اساتید", href: "/teachers", icon: teachers },
  { name: "اخبار", href: "/blogs", icon: contact },
  { name: "ارتباط با ما", href: "/contact", icon: news },
];

export default navbarRoutesItems;
