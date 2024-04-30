import { StaticImageData } from "next/image";
interface teachers {
    id: number;
    title: string,
    description: string,
    courseTime: string,
    courseCount: number,
    star: number,
    image: StaticImageData,
  }
  
  export type { teachers };