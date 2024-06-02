import { StaticImageData } from "next/image";

interface Category {
  id: number;
  techName: string;
  parentId: string;
  describe: string;
  iconAddress: string | null;
}

export type { Category };
