import { SlidercostCard } from "@/components/craft-components/slider-cost-card/SlidercostCard";

export default function SliderCardPage() {
  return (
    <div>
      <div className="relative h-screen w-full flex items-center justify-center">
        <SlidercostCard />
        <div className="absolute bottom-10 right-80 md:right-180 flex items-center justify-center">
          <p className="text-md text-subdued">Move slider</p>
        </div>
      </div>
    </div>
  );
}
