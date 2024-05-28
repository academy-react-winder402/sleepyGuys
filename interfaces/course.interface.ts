import { StaticImageData } from "next/image";

interface Course {
  courseId: string;
  title: string;
  tumbImageAddress: string;
  describe: string;
  cost: string;
  teacherName: string;
  courseRate: number;
  courseReserveId: string;
  currentUserRateNumber: number;
  currentUserSetRate: boolean;
  dissLikeCount: number;
  likeCount: number;
  isCourseReseve: boolean;
  isUserFavorite: boolean;
  lastUpdate: string;
  levelName: string;
  statusName: string;
  typeName: string;
  userFavoriteId: string;
  userIsDissLiked: boolean;
  userIsLiked: boolean;
  userLikeId: string;
}

export type { Course };
