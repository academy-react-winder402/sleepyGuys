import { StaticImageData } from "next/image";

interface UserCardType {
  title: string;
  description: string;
  image: StaticImageData;
  size: number;
}

export type { UserCardType };
