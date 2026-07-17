import Link from "next/link";
import React from "react";
import { ArrowUprightIcon, TwitterIcon } from "./icons/general";

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
            className="font-medium text-default underline underline-offset-2 decoration-subdued/20 hover:decoration-default transition-colors duration-300 ease-out whitespace-nowrap relative group"
            href={"https://x.com/yushankkk"}
          >
            @yushankkk
            <TwitterIcon className="absolute top-0 left-10 w-4 h-4 text-subdued translate-y-5 transition-all opacity-0 blur-sm duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-100 group-hover:blur-none" />
          </Link>{" "}
          or{" "}
          <Link
            className="group font-medium text-default underline underline-offset-2 decoration-subdued/20 hover:decoration-default transition-colors duration-300 ease-out whitespace-nowrap relative"
            href={"mailto:yushank.dev@gmail.com"}
          >
            yushank.dev@gmail.com
            <ArrowUprightIcon className="absolute bottom-0.5 right-6 w-4 h-4 text-subdued translate-x-full opacity-0 blur-sm transition-all duration-300 ease-out group-hover:translate-x-12 group-hover:opacity-100 group-hover:blur-none" />
          </Link>
          .
        </p>
      </div>
    </div>
  );
};
