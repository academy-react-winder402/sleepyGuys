import { StaticImageData } from "next/image";

interface Category {
  id: number;
  name: string;
  icon: StaticImageData;
  href: string;
}

export type { Category };