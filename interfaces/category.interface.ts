import { StaticImageData } from "next/image";

interface Category {
  id: number;
  name: string;
  icon: StaticImageData;
  query: string;
}

export type { Category };