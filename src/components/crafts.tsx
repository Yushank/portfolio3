import Link from "next/link";
import React from "react";

export const Crafts = () => {
  return (
    <div>
      <div className="mt-10 px-4">
        <div className="text-md leading-snug text-subdued">Crafts</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-10 max-w-full mx-auto">
          <Link
            href={""}
            className="relative block rounded-xl aspect-1760/1100 bg-secondary/10 border border-subdued/20 cursor-default overflow-hidden"
          >
            <img
              aria-hidden="true"
              alt=""
              src={"public\images\blur.png"}
              className="absolute inset-0 h-full w-full object-cover rounded-[10px]"
              style={{
                filter: "blur(32px)",
                scale: "(1.1)",
                transform: "translateZ(0)",
              }}
            />
          </Link>
          <Link
            href={""}
            className="relative block rounded-xl aspect-1760/1100 bg-secondary/10 border border-subdued/20 cursor-default overflow-hidden"
          >
            <img
              aria-hidden="true"
              alt=""
              src={"public\images\blur.png"}
              className="absolute inset-0 h-full w-full object-cover rounded-[10px]"
              style={{
                filter: "blur(32px)",
                scale: "(1.1)",
                transform: "translateZ(0)",
              }}
            />
          </Link>
          <Link
            href={""}
            className="relative block rounded-xl aspect-1760/1100 bg-secondary/10 border border-subdued/20 cursor-default overflow-hidden"
          >
            <img
              aria-hidden="true"
              alt=""
              src={"public\images\blur.png"}
              className="absolute inset-0 h-full w-full object-cover rounded-[10px]"
              style={{
                filter: "blur(32px)",
                scale: "(1.1)",
                transform: "translateZ(0)",
              }}
            />
          </Link>
          <Link
            href={""}
            className="relative block rounded-xl aspect-1760/1100 bg-secondary/10 border border-subdued/20 cursor-default overflow-hidden"
          >
            <img
              aria-hidden="true"
              alt=""
              src={"public\images\blur.png"}
              className="absolute inset-0 h-full w-full object-cover rounded-[10px]"
              style={{
                filter: "blur(32px)",
                scale: "(1.1)",
                transform: "translateZ(0)",
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
