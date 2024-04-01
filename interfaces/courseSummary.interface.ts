import { StaticImageData } from "next/image";

interface courseSummary {
  id: number;
  title: string;
  value: string | string[];
  icon: StaticImageData;
}

export type { courseSummary };
