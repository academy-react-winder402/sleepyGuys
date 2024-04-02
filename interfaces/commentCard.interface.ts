import { StaticImageData } from "next/image";

interface CommentCard {
  id: number;
  fullName: string;
  description: string;
  isTeacher: boolean;
  img: StaticImageData;
  isReplied: boolean;
  replies: CommentCard[];
}

export type { CommentCard };
