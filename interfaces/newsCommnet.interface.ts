interface newsCommentProps {
  id: string;
  accept: boolean;
  acceptReplysCount: number;
  author: string | undefined;
  newsId: string;
  currentUserEmotion: "LIKED" | "-" | "DISSLIKED";
  currentUserLikeId: string;
  describe: string;
  dissLikeCount: number;
  insertDate: string;
  likeCount: number;
  parentId: string;
  pictureAddress: string;
  title: string;
  userId: number;
}

export type { newsCommentProps };
