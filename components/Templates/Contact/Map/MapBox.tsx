import BoxHeader from "@/components/Modules/BoxHeader/BoxHeader";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@/components/Modules/Map/Map"), {
  ssr: false,
});

const MapBox = () => {
  return (
    <>
      <BoxHeader title="یه سر بیا پیشمون" hasLink={false} />
      <DynamicMap />
      <p className="text-lightBody dark:text-darkBody flex pt-3 text-[11px]">
        آدرس ما ساری بلوار خزر آموزشگاه دکتر بحرالعلوم هست.منتظر حضور گرمتان
        هستیم .
      </p>
    </>
  );
};

export default MapBox;
