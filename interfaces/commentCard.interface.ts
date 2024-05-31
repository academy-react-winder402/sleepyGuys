interface CommentCard {
  id: number;
  accept:boolean;
  acceptReplysCount:number;
  author:string;
  courseId:string;
  currentUserEmotion:string;
  currentUserLikeId:string;
  describe:string;
  disslikeCount:number;
  insertDate:string;
  likeCount:number;
  parentId:string;
  pictureAddress:string;
  title:string;
  userId:number;
}

export type { CommentCard };
