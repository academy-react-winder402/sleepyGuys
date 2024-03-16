import { StaticImageData } from "next/image";

interface News {
  id: number;
  title: string;
}

interface NewsContentProps {
  img: StaticImageData;
  title: string;
}

export type { News, NewsContentProps };
