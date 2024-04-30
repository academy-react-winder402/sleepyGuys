interface stepItems {
  title: string;
  description: string;
}

interface stepperType {
  steps: stepItems[];
  orientation: "vertical" | "horizontal";
}

export type { stepperType };
