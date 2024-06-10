import { ReactNode } from "react";
import { FieldError } from "react-hook-form";

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
  errorMessage?: any;
}

export type { primaryInput };
