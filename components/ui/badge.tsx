"use client";
import * as React from "react";

export function Badge({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide border bg-zinc-100 text-zinc-900 border-zinc-200 " +
        className
      }
      {...props}
    />
  );
}
