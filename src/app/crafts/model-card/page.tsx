import { ModelCard } from "@/components/craft-components/model-card/modelCard";

export default function ModelCardPage() {
  return (
    <div>
      <div className="relative h-screen w-full flex items-center justify-center">
        <ModelCard />
        <div className="absolute bottom-10 right-70 md:right-170 flex items-center justify-center">
          <p className="text-md text-subdued">Hover mouse over card</p>
        </div>
      </div>
    </div>
  );
}
