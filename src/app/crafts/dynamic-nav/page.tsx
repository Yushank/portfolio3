import { DynamicNav } from "@/components/craft-components/dynamic-navigation/dynamicNav1";
import { LeftArrowIcon } from "@/components/icons/general";
import Link from "next/link";

export default function DynamicNavPage() {
  return (
    <div>
      <div className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute top-0 left-0 flex items-center justify-start px-4 pt-4 pb-10">
          <Link
            className="py-2 px-2 flex gap-2 cursor-pointer"
            href={"/crafts"}
          >
            <LeftArrowIcon className="h-5 w-5 text-subdued" />
            <p className="text-subdued/90 text-sm">Back</p>
          </Link>
        </div>
        <DynamicNav />
        <div className="absolute bottom-10 right-75 md:right-175 flex items-center justify-center">
          <p className="text-md text-subdued">Toggle buttons</p>
        </div>
      </div>
    </div>
  );
}
