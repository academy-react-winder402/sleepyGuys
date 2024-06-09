import React, { useEffect, useState } from "react";

export default function EmptyLayout({ children }: any) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  return <div className="container">{isMounted ? children : null}</div>;
}
