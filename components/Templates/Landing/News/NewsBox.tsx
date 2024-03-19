import React from "react";
import BoxHeader from "@/components/Modules/BoxHeader/BoxHeader";
import { getNews } from "@/mock/getNews";
import NewsCard from "./NewsCard";
import EffectCardSlider from "@/components/Modules/Slider/EffectCardSlider";

export default function NewsBox() {
  return (
    <div className="lg:mt-36 mt-24">
      <BoxHeader title="آخرین اخبار" />
      <EffectCardSlider
        href="/blogs"
        title="مشاهده همه اخبار"
        data={getNews()}
        Content={NewsCard}
      />
    </div>
  );
}
