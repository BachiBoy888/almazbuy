"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function TrackRouteChange() {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    (window as any).fbq?.("track", "PageView");
  }, [pathname, search]);

  return null;
}
