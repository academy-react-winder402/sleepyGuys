import React, { useMemo, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { BlogSortItem } from "@/interfaces/blogSortItem.interface";
import { CourseSortingColProps } from "@/interfaces/courseSortingCol.interface";

export default function MainDropdown({ data }: { data: CourseSortingColProps[] | BlogSortItem[] }) {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["مرتب سازی براساس"]));

  const selectedValue = useMemo(
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
          className="w-full text-lightTitle dark:text-darkTitle font-peyda"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={handleSelectionChange}
      >
        {
          data.map((item) => (
            <DropdownItem
              className="text-lightTitle dark:text-darkTitle font-peyda"
              key={item.name}
            >
              {item.name}
            </DropdownItem>
          ))
        }
      </DropdownMenu>
    </Dropdown>
  );
}
