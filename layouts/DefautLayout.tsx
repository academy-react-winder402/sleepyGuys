import Footer from "@/components/Modules/Footer/Footer";
import Navbar from "@/components/Modules/Navbar/Navbar";
import React, { useEffect, useState } from "react";

export default function DefautLayout({ children }: any) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <div className="relative" style={{ paddingTop: "2rem" }}>
      {isMounted ? <>      <Navbar />
        <div className="container">
          {children}
          <Footer />
        </div></> : null}
    </div>
  );
}
