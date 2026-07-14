import Container from "@/components/container";
import { DottedSeparator } from "@/components/separator";
import Link from "next/link";

export default function CraftsPage() {
  return (
    <div>
      <div className="px-4">
        <Container className="flex-col items-center mt-10 mb-10">
          <p className="text-md text-subdued py-4">Some code snippets</p>
          <DottedSeparator />
        </Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4 max-w-full">
          <CraftCard
            url={""}
            webm={
              "https://pub-2409b35ccccb4526b9cb804582912d43.r2.dev/portfolio-videos/model-in-card-v.2.webm"
            }
            mp4={
              "https://pub-2409b35ccccb4526b9cb804582912d43.r2.dev/portfolio-videos/model-in-card-v.2.mp4"
            }
          />
          <CraftCard
            url={""}
            webm={
              "https://pub-2409b35ccccb4526b9cb804582912d43.r2.dev/portfolio-videos/navbar-motion-2.webm"
            }
            mp4={
              "https://pub-2409b35ccccb4526b9cb804582912d43.r2.dev/portfolio-videos/navbar-motion-2.mp4"
            }
          />
          <CraftCard
            url={""}
            webm={
              "https://pub-2409b35ccccb4526b9cb804582912d43.r2.dev/portfolio-videos/hover-card-v.7.webm"
            }
            mp4={
              "https://pub-2409b35ccccb4526b9cb804582912d43.r2.dev/portfolio-videos/hover-card-v.7.mp4"
            }
          />
          <CraftCard
            url={""}
            webm={
              "https://pub-2409b35ccccb4526b9cb804582912d43.r2.dev/portfolio-videos/slider-cost-card-v.3.webm"
            }
            mp4={
              "https://pub-2409b35ccccb4526b9cb804582912d43.r2.dev/portfolio-videos/slider-cost-card-v.3.mp4"
            }
          />
        </div>
      </div>
    </div>
  );
}

type craftCardProp = {
  url: string;
  webm: string;
  mp4: string;
};

const CraftCard = ({ url, webm, mp4 }: craftCardProp) => {
  return (
    <Link
      className="group relative block rounded-xl aspect-1760/1100 bg-secondary/10 border border-subdued/20 cursor-default overflow-hidden"
      href={url}
    >
      <img
        aria-hidden="true"
        alt=""
        src={"public\images\blur.png"}
        className="absolute inset-0 h-full w-full object-cover rounded-[10px]"
        style={{
          transform: "translateZ(0)",
          filter: "blur(32px)",
          scale: "(1.1)",
        }}
      />
      <video
        className="relative h-full w-full object-cover rounded-[10px] aspect-1760/1100 transition-transform duration-500 ease-out motion-reduce:transition-none"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src={webm} type="video/webm" />
        <source src={mp4} type="video/mp4" />
      </video>

      <div className="absolute bottom-0 left-0 w-full p-1 translate-y-full opacity-0 blur-sm group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none duration-300 ease-out transition-all">
        <div className="bg-blue-100 w-full rounded-lg py-1 border border-subdued/20 cursor-pointer flex items-center justify-center">
          <p className="font-medium text-sm text-default">View live</p>
        </div>
      </div>
    </Link>
  );
};
