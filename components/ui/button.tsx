"use client";
import * as React from "react";

type Variant = "default" | "outline" | "secondary" | "white";
type Size = "default" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export function Button({
  className = "",
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors " +
    // кольца под тёмный фон
    "focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900 " +
    "disabled:opacity-50 disabled:pointer-events-none";

  const variants: Record<Variant, string> = {
    default: "bg-zinc-900 text-white hover:bg-zinc-800",
    outline: "border border-zinc-600 text-white hover:bg-zinc-800",
    secondary: "bg-zinc-800 text-white hover:bg-zinc-700",
    // нужный вариант: белая => при hover зелёная
    white: "bg-white text-zinc-900 hover:bg-emerald-600 hover:text-white",
  };

  const sizes: Record<Size, string> = {
    default: "h-10 px-4 py-2",
    lg: "h-11 px-6 text-base",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
