import CategoryCard from "@/components/Modules/CategoryCard/CategoryCard";
import BoxHeader from "@/components/Modules/BoxHeader/BoxHeader";
import React from "react";
import { useGetTechnologiesApi } from "@/hooks/api/useCoursesApi";
import { Category } from "@/interfaces/category.interface";
import SkeletonCategoryCard from "@/components/Modules/CategoryCard/SkeletonCategoryCard";

function Categories() {
  const { data, isLoading } = useGetTechnologiesApi()

  return (
    <div className="lg:mt-36 mt-24 px-4 xl:px-32">
      <BoxHeader title="دسته بندی ها" hasLink={false} />
      <div className="flex items-center flex-wrap justify-center gap-4">
        {isLoading ? Array.from({ length: 4 }, (_, index) => <SkeletonCategoryCard key={index} />) : data.filter((item: Category) => item.parentId === null).map((item: Category, index: number) => (
          <CategoryCard {...item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
