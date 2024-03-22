import CategoriCard from "@/components/Modules/CategoryCard/CategoryCard";
import categoriItems from "@/constants/categories";
import BoxHeader from "@/components/Modules/BoxHeader/BoxHeader";
import React from "react";

function Categories() {
  return (
    <div className="lg:mt-36 mt-24 px-4 xl:px-32">
      <BoxHeader title="دسته بندی ها" hasLink={false} linkTitle="" route="" />
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-4">
        {categoriItems.map((categoriItem, index) => (
          <CategoriCard {...categoriItem} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
