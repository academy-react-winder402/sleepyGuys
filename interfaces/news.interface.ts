import { StaticImageData } from "next/image";

interface News {
  id: number;
  title: string;
  img: StaticImageData;
  des: string;
}


export type { News};
