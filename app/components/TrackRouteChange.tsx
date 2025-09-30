"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type FbqParams = Record<string, unknown>;
interface WindowWithFbq extends Window {
  fbq?: (
    method: "track" | "trackCustom" | "init" | "consent",
    eventName?: string,
    params?: FbqParams
  ) => void;
}

export default function TrackRouteChange() {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    (window as WindowWithFbq).fbq?.("track", "PageView");
  }, [pathname, search]);

  return null;
}
