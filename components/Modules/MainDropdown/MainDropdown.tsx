import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { CoursesSortItem } from "@/interfaces/coursesSortItem.interface";
import { BlogSortItem } from "@/interfaces/blogSortItem.interface";

export default function MainDropdown({ data }: { data: CoursesSortItem[] | BlogSortItem[] }) {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["جدیدترین"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const handleSelectionChange = (keys: any) => {
    setSelectedKeys(keys);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="flat"
          className="capitalize w-full text-lightTitle dark:text-darkTitle"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={handleSelectionChange}
      >
        {[
          ...data.map((item, index) => (
            <DropdownItem
              className="text-lightTitle dark:text-darkTitle"
              key={item.name}
            >
              {item.name}
            </DropdownItem>
          )),
        ]}
      </DropdownMenu>
    </Dropdown>
  );
}
