import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { CoursesSortItem } from "@/interfaces/coursesSortItem.interface";

interface MainDropdownProps {
  data: CoursesSortItem[];
}

export default function MainDropdown({ data }: MainDropdownProps) {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["جدیدترین"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const handleSelectionChange = (keys: any) => {
    setSelectedKeys(keys);
  };

  console.log(data);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="flat" className="capitalize w-full text-lightTitle dark:text-darkTitle">
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
          ...data.map((item) => (
            <DropdownItem className="text-lightTitle dark:text-darkTitle" key={item.key}>{item.value}</DropdownItem>
          )),
        ]}
      </DropdownMenu>
    </Dropdown>
  );
}
