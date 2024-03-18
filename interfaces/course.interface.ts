import { StaticImageData } from "next/image";

interface Course {
  id: number;
  title: string;
  image: StaticImageData;
  des: string;
  price: number;
  teachers: string;
  time: string;
}

export type { Course };