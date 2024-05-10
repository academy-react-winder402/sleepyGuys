import { breadcrumbType } from "@/interfaces/breadcrumb.interface";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import leftChevronIcon from "@/public/icons/solid/chevron-left.svg";

export default function MainBreadcrumb({ items }: breadcrumbType) {
  return (
    <Breadcrumbs
      variant="solid"
      classNames={{
        base: ["bg-white dark:bg-dark-lighter", "p-2", "rounded-xl"],
        list: ["bg-transparent"],
      }}
      separator={
        <Image src={leftChevronIcon} alt="" width={20} className="rotate-180" />
      }
      itemClasses={{
        separator: "px-2.5",
      }}
    >
      <BreadcrumbItem className="font-peyda">
        <Link href="/">خانه</Link>
      </BreadcrumbItem>
      {items.map((item, index) => (
        <BreadcrumbItem key={item.id} className="font-peyda">
          <Link href={item.route}>{item.title}</Link>
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
}
