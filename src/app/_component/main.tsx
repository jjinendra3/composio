import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Main() {
  return (
    <div className="h-full w-full rounded-xl  flex flex-col justify-between gap-2 shadow-xl">
      <div className="w-full p-8 gap-4 flex flex-col">
        <h1 className="text-xs text-gray-400 font-mono max-w-fit px-2 py-1 border border-gray-500 rounded-sm">
          Why platform
        </h1>
        <h1 className="font-inter font-medium text-4xl w-[60%]">
          The {"internet's"} most{" "}
          <span className="text-[#FF5E24]">accurate</span> visitor identifier
        </h1>
        <h4 className="text-base w-[60%] font-semibold">
          <span className="text-[#484946]">Industry-leading accuracy</span> that
          lasts for months or years, even when cookies are cleared.
        </h4>
        <Button className="w-24 bg-[#F8F8F6] border border-[#D9D9D6] font-medium text-xs text-black py-2 px-4">
          Learn More
        </Button>
      </div>
      <div className="">
        <Image
          src="graph.svg"
          height={100}
          width={500}
          alt="hero"
          className="h-full w-[95%]"
        />
      </div>
    </div>
  );
}
