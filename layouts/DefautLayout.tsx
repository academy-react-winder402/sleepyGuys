import Footer from "@/components/Modules/Footer/Footer";
import Navbar from "@/components/Modules/Navbar/Navbar";
import React from "react";

export default function DefautLayout({ children }: any) {
  return (
    <div>
      <Navbar />
      <div className="container">
        {children}
        <Footer />
      </div>
    </div>
  );
}
