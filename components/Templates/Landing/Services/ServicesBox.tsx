import React from "react";
import NewsCard from "../News/NewsCard";
import EffectCardSlider from "@/components/Modules/Slider/EffectCardSlider";
import { getServices } from "@/mock/getServices";
import BoxHeader from "@/components/Modules/BoxHeader/BoxHeader";

export default function ServicesBox() {
  return (
    <div className="lg:mt-36 mt-24">
      <BoxHeader title="خدمات ما" hasLink={false} linkTitle="" route="" />
      <EffectCardSlider
        href=""
        title=""
        data={getServices()}
        Content={NewsCard}
      />
    </div>
  );
}
