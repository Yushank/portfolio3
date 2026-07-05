"use client";

import cn from "@/lib/utils";
import React from "react";

export type DottedUnderlineProps = {
  dotRadius?: number;
  patternWidth?: number;
  patternHeight?: number;
  height?: number;
  color?: string;
  className?: string;
};

export const DottedUnderline = ({
  dotRadius = 1,
  patternWidth = 6,
  patternHeight = 4,
  height: stripHeight = 4,
  color,
  className,
}: DottedUnderlineProps) => {
  const patternId = React.useId().replace(/:/g, "");

  return (
    <svg
      className={cn(
        "pointer-events-none absolute bottom-0 left-0 w-full",
        color == null && "text-neutral-400",
        className,
      )}
      style={{ height: stripHeight }}
      aria-hidden
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id={patternId}
          width={patternWidth}
          height={patternHeight}
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx={patternWidth / 2}
            cy={patternHeight / 2}
            r={dotRadius}
            fill={color ?? "currentColor"}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};
