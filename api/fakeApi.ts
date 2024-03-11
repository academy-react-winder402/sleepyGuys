import dashboard from "@/public/icons/theme/phoneMode/dashboard.svg";
import courses from "@/public/icons/theme/phoneMode/courses.svg";
import teachers from "@/public/icons/theme/phoneMode/teachers.svg";
import contact from "@/public/icons/theme/phoneMode/contact.svg";
import news from "@/public/icons/theme/phoneMode/news.svg";
const mainRoutes: { name: string; href: string }[] = [
  { name: "خانه", href: "/", icon: dashboard },
  { name: "دوره ها", href: "/courses", icon: courses },
  { name: "اساتید", href: "/teachers", icon: teachers },
  { name: "ارتباط با ما", href: "/contact", icon: news },
  { name: "اخبار", href: "/blogs", icon: contact },
];

export default mainRoutes;
