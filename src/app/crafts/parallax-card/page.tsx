import { ParallaxCard } from "@/components/craft-components/parallax-card/parallaxCard";
import { HomeIcon } from "@/components/icons/general";
import Link from "next/link";

export default function ParallaxCardPage() {
  return (
    <div>
      <div className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute top-0 left-0 flex items-center justify-start px-4 pt-4 pb-10">
          <Link className="py-2 flex gap-2 cursor-pointer" href={"/"}>
            <HomeIcon className="h-5 w-5 text-subdued" />
            <p className="text-subdued/90 text-sm">Back Home</p>
          </Link>
        </div>
        <ParallaxCard />
        <div className="absolute bottom-10 right-70 md:right-170 flex items-center justify-center">
          <p className="text-md text-subdued">Hover mouse over card</p>
        </div>
      </div>
    </div>
  );
}
