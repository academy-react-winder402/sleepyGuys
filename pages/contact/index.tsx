import Map from "@/components/Templates/Contact/Map/Map";
import React from "react";
import BoxHeader from "@/components/Modules/BoxHeader/BoxHeader";

import dynamic from "next/dynamic";
import Footer from "@/components/Modules/Footer/Footer";

const DynamicMap = dynamic(
  () => import("@/components/Templates/Contact/Map/Map"),
  {
    ssr: false,
  }
);

function Contact() {
  return (
    <div>
      <BoxHeader
        title="یه سر بیا پیشمون"
        hasLink={false}
        linkTitle=""
        route=""
      />
      <DynamicMap />
      <p className="text-LightBody dark:text-DarkBody flex justify-center py-2 text-sm">
        آدرس ما ساری بلوار خزر آموزشگاه دکتر بحرالعلوم هست.منتظر حضور گرمتان
        هستیم .
      </p>
    </div>
  );
}

export default Contact;
