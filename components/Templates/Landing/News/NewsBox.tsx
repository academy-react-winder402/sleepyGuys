import React from "react";
import { getNews } from "@/mock/getNews";
import NewsCard from "./NewsCard";
import EffectCardSlider from "@/components/Modules/Slider/EffectCardSlider";
import BoxHeader from "@/components/Modules/BoxHeader/BoxHeader";

export default function NewsBox() {
  return (
    <div className="lg:mt-36 mt-24">
      <BoxHeader title="آخرین اخبار" hasLink={false} linkTitle="" route="" />
      <EffectCardSlider
        href="/blogs"
        title="مشاهده همه اخبار"
        data={getNews()}
        Content={NewsCard}
      />
    </div>
  );
}
