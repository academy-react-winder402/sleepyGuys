import { StaticImageData } from "next/image";

interface CommentCard{
  name: string;
  role: string;
  description: string;
  image: StaticImageData;
  size: number;
};

export type { CommentCard };