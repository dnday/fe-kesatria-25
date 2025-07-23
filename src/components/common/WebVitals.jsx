"use client";
import { useEffect } from "react";

export function WebVitals() {
  useEffect(() => {
    if (typeof window !== "undefined" && "web-vitals" in window === false) {
      import("web-vitals").then(
        ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        }
      );
    }
  }, []);

  return null;
}

export default WebVitals;
