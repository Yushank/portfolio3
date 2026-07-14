import { DynamicNav } from "@/components/craft-components/dynamic-navigation/dynamicNav1";

export default function DynamicNavPage() {
  return (
    <div>
      <div className="relative h-screen w-full flex items-center justify-center">
        <DynamicNav />
        <div className="absolute bottom-10 right-75 md:right-175 flex items-center justify-center">
          <p className="text-md text-subdued">Toggle buttons</p>
        </div>
      </div>
    </div>
  );
}
