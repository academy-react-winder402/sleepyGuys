import React from "react";
import navbarRoutesItems from "@/constants/navbarRoutesItems";
import BottomNavigation from "./BottomNavigation";
import DesktopTopNavigation from "./DesktopTopNavigation";
import MobileTopNavigation from "./MobileTopNavigation";

function Navbar() {
  return (
    <>
      <DesktopTopNavigation />
      <MobileTopNavigation />
      <BottomNavigation mainRoutes={navbarRoutesItems} />
    </>
  );
}

export default Navbar;
