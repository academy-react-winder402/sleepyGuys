import { BlogSortItem } from "./blogSortItem.interface";
import { CourseSortingColProps } from "./courseSortingCol.interface";

interface horizontalFilter {
  placeholder: string;
  sortingColArray: CourseSortingColProps[] | BlogSortItem[] | [];
  sortTypeArray: CourseSortingColProps[];
}

export type { horizontalFilter };
