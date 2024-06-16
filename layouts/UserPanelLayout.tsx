import Sidebar from "@/components/Templates/UserPanel/Sidebar/Sidebar";
import UserPanelTopNavigation from "@/pages/userpanel/TopBar/TopBar";
import React, { useEffect, useState } from "react";

export default function UserPanelLayout({ children }: any) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className="container">
      <div className="flex gap-8 mt-10">
        <Sidebar />
        <div className="w-[70%]">
          <UserPanelTopNavigation />
          {isMounted ? children : null}
        </div>
      </div>
    </div>
  );
}
