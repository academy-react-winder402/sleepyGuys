import CategoriCard from "@/components/Modules/CategoryCard/CategoryCard";
import categoriItems from "@/constants/categories";
import React from "react";

function Categories() {
  return (
    <div className="lg:mt-36 mt-24 px-20 xl:px-32">
      <h1 className="font-peyda text-[30px] md:text-[35px] text-primary dark:text-primary-lighter lg:mb-10 mb-8 text-center">
        دسته بندی ها
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoriItems.map((categoriItem, index) => (
          <CategoriCard {...categoriItem} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
