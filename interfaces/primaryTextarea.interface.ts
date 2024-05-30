interface primaryTextareaProps {
  placeholder: string;
  variant: "bordered" | "faded" | "flat" | "underlined";
  className?: string;
  isInvalid?: boolean;
  errorMessage?: string;
  register?: any;
}

export type { primaryTextareaProps };
