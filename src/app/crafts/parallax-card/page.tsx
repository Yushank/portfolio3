import { ParallaxCard } from "@/components/craft-components/parallax-card/parallaxCard";

export default function ParallaxCardPage() {
  return (
    <div>
      <div className="relative h-screen w-full flex items-center justify-center">
        <ParallaxCard />
        <div className="absolute bottom-10 right-70 md:right-170 flex items-center justify-center">
          <p className="text-md text-subdued">Hover mouse over card</p>
        </div>
      </div>
    </div>
  );
}
