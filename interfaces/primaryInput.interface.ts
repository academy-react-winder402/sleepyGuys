import { ReactNode } from "react";

interface primaryInput {
  placeholder: string;
  variant: "bordered" | "faded" | "flat" | "underlined";
  className?: string;
  type?: "text" | "password" | "number";
  register?: any;
  hasBorder?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
  errorMessage?: string;
}

export type { primaryInput };
