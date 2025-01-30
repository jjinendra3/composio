import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Main() {
  return (
    <div className="flex-grow w-full rounded-xl bg-white flex flex-col justify-between gap-2 shadow-xl">
      <div className="w-full p-8 gap-4 flex flex-col">
        <h1 className="text-xs text-gray-400 font-mono max-w-fit px-2 py-1 border border-gray-300 rounded-sm">
          Why platform
        </h1>
        <h1 className=" font-medium text-4xl max-w-md">
          The {"internet's"} most{" "}
          <span className="text-[#FF5E24]">accurate</span> visitor identifier
        </h1>
        <h4 className="text-base max-w-sm font-normal text-[#484946]">
          <span className="font-semibold">Industry-leading accuracy</span> that
          lasts for months or years, even when cookies are cleared.
        </h4>
        <Button className="w-24 bg-[#F8F8F6] border border-[#D9D9D6] font-medium text-xs text-black py-2 px-4">
          Learn More
        </Button>
      </div>
      <div>
        <Image
          src="graph.svg"
          height={100}
          width={500}
          alt="hero"
          className="h-full w-[96%]"
        />
      </div>
    </div>
  );
}
