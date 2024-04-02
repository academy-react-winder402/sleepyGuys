import React from "react";
import navbarRoutesItems from "@/constants/navbarRoutesItems";
import BottomNavigation from "./BottomNavigation";
import DesktopTopNavigation from "./DesktopTopNavigation";
import MobileTopNavigation from "./MobileTopNavigation";

function Navbar() {
  return (
    <>
      <div className="container">
        <DesktopTopNavigation />
        <MobileTopNavigation />
      </div>
      <BottomNavigation mainRoutes={navbarRoutesItems} />
    </>
  );
}

export default Navbar;
