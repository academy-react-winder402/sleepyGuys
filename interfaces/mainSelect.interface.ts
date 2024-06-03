import { CourseSortingColProps } from "./courseSortingCol.interface";

interface mainSelectProps {
  label?: string;
  variant?: "bordered" | "faded" | "flat" | "underlined";
  placeholder?: string;
  data: CourseSortingColProps[];
  queryName: string;
  className?: string;
}

export type { mainSelectProps };
