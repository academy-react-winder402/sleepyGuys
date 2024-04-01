import { StaticImageData } from "next/image";

interface UserCardType {
  title: string;
  description: string;
  image: StaticImageData;
}

export type { UserCardType };
