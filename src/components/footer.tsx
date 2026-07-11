import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-center mb-10">
        <p className="text-sm text-subdued">
          Inspired by{" "}
          <Link
            className="font-medium text-default underline underline-offset-2 decoration-subdued/20 hover:decoration-default transition-colors duration-300 ease-out whitespace-nowrap"
            href={"https://sorenblank.com/#main"}
          >
            Soren
          </Link>{" "}
          and{" "}
          <Link
            className="font-medium text-default underline underline-offset-2 decoration-subdued/20 hover:decoration-default transition-colors duration-300 ease-out whitespace-nowrap"
            href={"https://www.manuarora.in/"}
          >
            Manu Arora
          </Link>
        </p>
      </div>
    </div>
  );
};
