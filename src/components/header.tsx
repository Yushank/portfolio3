import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div>
      <div className="mt-24 px-4 flex flex-col">
        <span className="text-md font-medium leading-snug items-center gap-2">
          Yushank Kashyap
        </span>
        <span className="text-md leading-snug text-subdued">
          Design Engineer
        </span>
      </div>
      <div className="px-4">
        <p className="mt-5 mb-6 text-subdued">
          I{" "}
          <Link
            className="font-medium text-default underline underline-offset-2 decoration-subdued/20 hover:decoration-default transition-colors duration-300 ease-out whitespace-nowrap"
            href={""}
          >
            craft
          </Link>{" "}
          interfaces - components, interactions, and the small details that make
          a product feel alive. Code is how I bring ideas to life.
        </p>
        <p className="mt-5 mb-6 text-subdued">
          I'm always experimenting with new ideas, and I share the ones worth
          telling on Twitter
        </p>
        <p className="mt-5 mb-6 text-subdued">
          Say hi at{" "}
          <Link
            className="font-medium text-default underline underline-offset-2 decoration-subdued/20 hover:decoration-default transition-colors duration-300 ease-out whitespace-nowrap"
            href={""}
          >
            @yushankkk{" "}
          </Link>{" "}
          or{" "}
          <Link
            className="font-medium text-default underline underline-offset-2 decoration-subdued/20 hover:decoration-default transition-colors duration-300 ease-out whitespace-nowrap"
            href={""}
          >
            yushank.dev@example.com
          </Link>
          .
        </p>
      </div>
    </div>
  );
};
