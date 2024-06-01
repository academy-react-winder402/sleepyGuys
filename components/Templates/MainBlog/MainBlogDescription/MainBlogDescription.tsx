import MainButton from "@/components/Modules/Button/MainButton";
import { Card, CardBody, CardHeader, ScrollShadow } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import chevronDown from "@/public/icons/solid/chevron-down.svg";
import chevronUp from "@/public/icons/solid/chevron-up.svg";

export default function MainBlogDescription() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      className="p-6 shadow-none rounded-l-[50px] dark:bg-dark-lighter"
      dir="rtl"
    >
      <CardHeader>
        <p className="font-kalamehBlack text-3xl text-primary dark:text-primary-lighter">
          توضیحات
        </p>
      </CardHeader>
      <CardBody className="text-right">
        <ScrollShadow
          size={200}
          className={`${
            !isExpanded ? "h-[40dvh]" : "h-auto"
          }  leading-7 flex flex-col gap-y-6 overflow-hidden mb-10 text-lightBody dark:text-darkBody transition-height !duration-500 !ease-in-out`}
          visibility="auto"
        >
          <p>
            ببینید در برنامه های مخصوص کامپیوتر، داده ها درون مجموعه ای از
            متغیرها ذخیره میشن که هر متغیر به نسبت نوعی که داره، درصدی از فضای
            ram کامپیوتر رو اشغال میکنه. حالا زمانی که برنامه ما در حال اجراست
            به اون بخش از حافظه ای که اشغال شده میگیم state . به عبارت ساده‌تر
            آخرین وضعیت و حالت دیتاهای هر برنامه در state ها نگهداری میشه تا
            بتونیم از طریق اونها از اتفاقات و تحولات برنامه باخبر بشیم.
          </p>
          <p>
            در واقع ما میتونیم به کمک redux تغییراتی که در وضعیت برنامه ما اتفاق
            میفته رو پیگیری کرده و تاریخچه اون تغییرات رو بررسی کنیم. همچنین
            میتونیم با به اشتراک گذاری وضعیت برنامه به طور منظم به توسعه دهنده
            های دیگه این امکان رو فراهم کنیم که در دوره های زمانی مشخص، وضعیت
            برنامه توسط اشخاص مرتبط قابل مشاهده باشه و اقدامات لازم در زمان
            مناسب صورت بگیره.
          </p>
          <p>
            Redux قابلیت پشتیبان گیری دارد. بنابراین شما میتونید آخرین حالت های
            برنامه خودتون رو ذخیره کنید و اگه مشکل یا نقصی پیش اومد اون رو به
            حالت های پایدار قبل برگردونید. این ویژگی باعث میشه مراحل پیشرفت و
            توسعه پروژه مثل پله های یک نردبان تثبیت بشن و مشکلات احتمالی از حد
            مشخصی بیشتر نشه.
          </p>
          <p>
            در redux قابلیت تست به این صورت هست که اجزای برنامه رو از وضعیت
            برنامه جدا میکنه تا راحت تر بتونیم عملیات تست رو انجام بدیم و به این
            ترتیب فرایند دیباگ کردن رو خیلی راحت تر میکنه.
          </p>
          <p>
            در بازار کار امروز ریکت، یکی از مهم ترین تکنولوژی ها برای توسعه
            دهنده های فرانت‌اند همین کتابخونه redux هست و یادگیری اون میتونه یک
            مزیت و تمایز مهم برای متخصص React باشه. معمولا redux با کتابخونه
            react-redux برای یکپارچه سازی redux و react استفاده میشه.
          </p>
          <p>
            Redux نه تنها با ریکت، بلکه با بقیه فریم ورک های جاوا اسکریپت مثل
            انگیولار و ویو هم به خوبی کار میکنه و سازگاری کامل داره. بنابراین با
            هرکدوم از این تکنولوژی ها که کار میکنید، یادگیری ریداکس میتونه
            براتون مفید باشه. بطور خلاصه، Redux یک کتابخانه قدرتمند برای مدیریت
            وضعیت برنامه هست که سادگی، پشتیبان‌گیری، تست پذیری و توسعه پذیر بودن
            رو فراهم می کنه.
          </p>
          <p>
            تیم توسعه Redux پیشنهاد داده که فقط زمانی که در پروژه نیاز بود از
            ریداکس استفاده کنید چون در غیر این صورت نه تنها مشکلی رو حل نمیکنه
            بلکه میتونه کار رو سخت تر و پیچیده تر کنه. در واقع چنین کتابخونه
            هایی برای برنامه های بزرگ و شلوغ طراحی شدن و اگر برای برنامه های
            کوچیک استفاده بشن ممکنه بهره وری کلی رو پایین بیارن.
          </p>
        </ScrollShadow>
        <MainButton
          content={<p>{!isExpanded ? "مشاهده بیشتر" : "مشاهده کمتر"}</p>}
          className="w-max mx-auto bg-primary dark:bg-primary-darker text-btnText"
          endIcon={<Image src={!isExpanded ? chevronDown : chevronUp} alt="" />}
          onClick={() => setIsExpanded(!isExpanded)}
        />
      </CardBody>
    </Card>
  );
}