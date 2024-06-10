interface courseDetailsBoxProps {
  title: string;
  miniDescribe: string;
  cost: number;
  imageAddress: string;
  courseId: string;
  endTime: string;
  startTime: string;
  teacherId: number;
  teacherName: string;
  insertDate: string;
  currentRate: number;
  googleTitle: string;
  capacity: number;
  uniqeUrlString: string;
  currentRegistrants: number;
  courseLevelName: string;
  courseStatusName: string;
  commentCount: number;
  likeCount: number;
  dissLikeCount: number;
  currentUserLike: string;
  currentUserDissLike: string;
  courseGroupCount: number;
  isCourseUser: string;
  isCourseReseve: string;
  courseReseveId: string;
  userFavoriteId: string;
  isUserFavorite: boolean;
  userLikeId: string;
  currentUserSetRate: boolean;
  currentUserRateNumber: number;
  techs: string[];
}

export type { courseDetailsBoxProps };
