interface primaryTextareaProps {
  placeholder: string;
  variant: "bordered" | "faded" | "flat" | "underlined";
  className?: string;
  isInvalid?: boolean;
  errorMessage?: any;
  register?: any;
}

export type { primaryTextareaProps };
