import React from "react";
import { Button } from "@nextui-org/react";
import { button } from "@/interfaces/button.interface";

function MainButton({Class , Content}: button) {
  return (
    <Button
      className={Class}
      type="submit"
    >
    <p>{Content}</p>
    </Button>
  );
}

export default MainButton;
