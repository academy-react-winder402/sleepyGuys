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
<<<<<<< HEAD
  color?: "default" | "danger" | "primary" | "secondary" | "success" | "warning";
  onClick?: any;
=======
  color?:
    | "default"
    | "danger"
    | "primary"
    | "secondary"
    | "success"
    | "warning";
  onClick?: () => void;
  isDisabled?: boolean;
>>>>>>> main
}

export type { button };
