import cn from "@/lib/utils";
import React from "react";

export default function Container({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-3xl px-4", className)}>{children}</div>
  );
}
