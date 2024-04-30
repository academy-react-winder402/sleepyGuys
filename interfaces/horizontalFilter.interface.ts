import { BlogSortItem } from "./blogSortItem.interface";
import { CourseSortItem } from "./courseSortItem.interface";

interface horizontalFilter {
  placeholder: string;
  sortItemsArray: CourseSortItem[] | BlogSortItem[] | [];
}

export type { horizontalFilter };
