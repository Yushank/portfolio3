import Link from "next/link";
import React from "react";

export const Crafts = () => {
  return (
    <div>
      <div className="px-4">
        <div className="text-md leading-snug text-subdued">Crafts</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 max-w-full mx-auto">
          <CraftCard
            url={"/crafts/model-card"}
            webm={
              "https://pub-2409b35ccccb4526b9cb804582912d43.r2.dev/portfolio-videos/model-in-card-v.2.webm"
            }
            mp4={
              "https://pub-2409b35ccccb4526b9cb804582912d43.r2.dev/portfolio-videos/model-in-card-v.2.mp4"
            }
          />
          <CraftCard
            url={"/crafts/dynamic-nav"}
            webm={
              "https://pub-2409b35ccccb4526b9cb804582912d43.r2.dev/portfolio-videos/navbar-motion-2.webm"
            }
            mp4={
              "https://pub-2409b35ccccb4526b9cb804582912d43.r2.dev/portfolio-videos/navbar-motion-2.mp4"
            }
          />
          <CraftCard
            url={"/crafts/parallax-card"}
            webm={
              "https://pub-2409b35ccccb4526b9cb804582912d43.r2.dev/portfolio-videos/hover-card-v.7.webm"
            }
            mp4={
              "https://pub-2409b35ccccb4526b9cb804582912d43.r2.dev/portfolio-videos/hover-card-v.7.mp4"
            }
          />
          <CraftCard
            url={"/crafts/slider-card"}
            webm={
              "https://pub-2409b35ccccb4526b9cb804582912d43.r2.dev/portfolio-videos/slider-cost-card-v.3.webm"
            }
            mp4={
              "https://pub-2409b35ccccb4526b9cb804582912d43.r2.dev/portfolio-videos/slider-cost-card-v.3.mp4"
            }
          />
        </div>
        <div className="flex items-center justify-end mt-4">
          <Link
            className="text-md text-subdued hover:text-default cursor-pointer"
            href={"/crafts"}
          >
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};

type craftCardProp = {
  url: string;
  webm: string;
  mp4: string;
};

const CraftCard = ({ url, webm, mp4 }: craftCardProp) => {
  return (
    <Link
      href={url}
      className="group relative block rounded-xl aspect-1760/1100 bg-secondary/10 border border-subdued/20 cursor-default overflow-hidden"
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
      <video
        className="relative h-full w-full object-cover aspect-1760/1100 rounded-[10px] transition-transform duration-500 ease-out motion-reduce:transition-none"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src={webm} type="video/webm" />
        <source src={mp4} type="video/mp4" />
      </video>
      <div className="absolute bottom-0 left-0 w-full p-1 translate-y-full opacity-0 blur-sm transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none">
        <div className="bg-blue-100 w-full rounded-lg py-1 border border-subdued/20 cursor-pointer flex items-center justify-center">
          <p className="font-medium text-sm text-default">View Live</p>
        </div>
      </div>
    </Link>
  );
};
