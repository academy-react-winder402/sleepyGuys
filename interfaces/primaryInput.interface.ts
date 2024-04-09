import { ReactNode } from "react";

interface primaryInput {
  placeholder: string;
  variant: "bordered" | "faded" | "flat" | "underlined";
  className?: string;
  register?: any;
  hasBorder?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
}

export type { primaryInput };
