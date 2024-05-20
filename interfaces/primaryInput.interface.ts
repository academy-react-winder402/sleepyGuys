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
  isInvalid?: boolean;
  errorMessage?: string;
}

export type { primaryInput };
