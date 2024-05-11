import { StaticImageData } from "next/image";

interface teacherSummaryProps {
  title: string;
  description: string;
  img: StaticImageData;
  website: string;
  coursesCount: string;
  students: string;
  degree: string;
  rate: string;
}

export type { teacherSummaryProps };
