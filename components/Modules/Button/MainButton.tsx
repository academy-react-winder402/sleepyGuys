import React from "react";
import { Button } from "@nextui-org/react";
import { button } from "@/interfaces/button.interface";

function MainButton({
  className,
  content,
  type = "button",
  variant = "solid",
  startIcon,
  endIcon,
  color = "default",
  onClickHandler,
}: button) {
  return (
    <Button
      className={className}
      type={type}
      variant={variant}
      startContent={startIcon}
      endContent={endIcon}
      onClick={onClickHandler}
      color={color}
    >
      {content}
    </Button>
  );
}

export default MainButton;
