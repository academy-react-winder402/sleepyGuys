import fallbackImage from "@/public/pictures/courses/next.webp";
import { StaticImageData } from "next/image";

export const validateImageAddress = (
  address: string
): StaticImageData | string => {
  if (!address) return fallbackImage;
  if (address.startsWith("http://") || address.startsWith("https://")) {
    return address;
  } else {
    return fallbackImage;
  }
};
