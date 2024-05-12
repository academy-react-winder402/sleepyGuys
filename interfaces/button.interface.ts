import { ReactNode } from "react";

interface button {
  className?: string;
  content: string | ReactNode;
  type?: "button" | "submit";
  variant?:
    | "solid"
    | "faded"
    | "bordered"
    | "light"
    | "flat"
    | "ghost"
    | "shadow";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  color?:
    | "default"
    | "danger"
    | "primary"
    | "secondary"
    | "success"
    | "warning";
  onClick?: any;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export type { button };
