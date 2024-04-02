import userIcon from "@/public/icons/theme/user.svg";

export const getComments = () => {
  return [
    {
      id: 1,
      fullName: "آرین خلقی",
      description:
        "طبق روند تدریس شده در این دوره ابتدا Page Router و سپس App Router رو یاد بگیرین ❤️",
      isTeacher: false,
      img: userIcon,
      isReplied: false,
      replies: [
        {
          id: 2,
          fullName: "آرمان غنی زاده",
          description:
            "طبق روند تدریس شده در این دوره ابتدا Page Router و سپس App Router رو یاد بگیرین ❤️",
          isTeacher: true,
          img: userIcon,
          isReplied: true,
          replies: [],
        },
        {
          id: 3,
          fullName: "مایکل آقایی",
          description:
            "طبق روند تدریس شده در این دوره ابتدا Page Router و سپس App Router رو یاد بگیرین ❤️",
          isTeacher: false,
          img: userIcon,
          isReplied: true,
          replies: [],
        },
      ],
    },
    {
      id: 4,
      fullName: "آرین خلقی",
      description: "دوره بسیار فوق العاده ای است به همه پیشنهاد می کنم",
      isTeacher: false,
      img: userIcon,
      isReplied: false,
      replies: [
        {
          id: 5,
          fullName: "آرمان غنی زاده",
          description: "ممنون آرین جان انشاالله موفق باشید",
          isTeacher: true,
          img: userIcon,
          isReplied: true,
          replies: [],
        },
      ],
    },
    {
      id: 6,
      fullName: "مایکل آقایی",
      description: "دوره بسیار فوق العاده ای است به همه پیشنهاد می کنم",
      isTeacher: false,
      img: userIcon,
      isReplied: false,
      replies: [],
    },
  ];
};
