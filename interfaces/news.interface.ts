import { StaticImageData } from "next/image";

interface News {
  addUserFullName: string;
  addUserProfileImage: string;
  currentDissLikeCount: number;
  currentImageAddressTumb: string | any;
  currentLikeCount: number;
  currentRate: number;
  currentUserFavoriteId: string;
  currentUserIsDissLike: boolean;
  currentUserIsLike: boolean;
  currentUserRateNumber: number;
  currentUserSetRate: boolean;
  currentView: number;
  id: string;
  insertDate: string;
  isActive: boolean;
  isCurrentUserFavorite:boolean;
  keyword: string;
  likeId: string;
  miniDescribe: string;
  newsCatregoryId: number;
  newsCatregoryName: string;
  title: string;
  totalCount: number;
  updateDate: string

}

export type { News };
