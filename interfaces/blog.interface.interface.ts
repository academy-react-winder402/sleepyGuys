import { StaticImageData } from "next/image";

interface Blog {
  id: number;
  title: string;
  image: StaticImageData;
  des: string;
}

export type { Blog };