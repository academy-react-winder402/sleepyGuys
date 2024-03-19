import React from "react";
import BoxHeader from "@/components/Modules/BoxHeader/BoxHeader";
import { getNews } from "@/mock/getNews";
import NewsCard from "../News/NewsCard";
import EffectCardSlider from "@/components/Modules/Slider/EffectCardSlider";

export default function ServicesBox() {
  return (
    <div className="lg:mt-36 mt-24">
      <BoxHeader title="خدمات ما" />
      <EffectCardSlider href="" title="" data={getNews()} Content={NewsCard} />
    </div>
  );
}
