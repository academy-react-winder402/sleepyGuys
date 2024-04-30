import { breadcrumbType } from "@/interfaces/breadcrumb.interface";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default function MainBreadcrumb({ items }: breadcrumbType) {
  return (
    <Breadcrumbs
      variant="solid"
      classNames={{
        base: ["bg-white", "p-2", "rounded-xl"],
        list: ["bg-transparent"],
      }}
      separator={">"}
      itemClasses={{
        separator: "px-2.5",
      }}
    >
      {items.map((item, index) => (
        <BreadcrumbItem key={index} className="font-peyda">
          <Link href={item.route}>{item.title}</Link>
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
}
