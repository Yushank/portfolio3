"use client";

import { DottedUnderline, type DottedUnderlineProps } from "./dotted-underline";
import cn from "@/lib/utils";

export type DottedSeparatorProps = Omit<DottedUnderlineProps, "className"> & {
  className?: string;
  svgClassName?: string;
};

export const DottedSeparator = ({
  className,
  svgClassName,
  ...dottedProps
}: DottedSeparatorProps) => {
  return (
    <div aria-hidden className={cn("w-full shrink-0", className)}>
      <DottedUnderline
        {...dottedProps}
        className={cn(
          "relative right-auto bottom-auto left-auto block w-full opacity-40",
          svgClassName,
        )}
      />
    </div>
  );
};
