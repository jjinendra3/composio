import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Main() {
  return (
    <div className="h-full w-full rounded-xl bg-red-100 flex flex-col justify-between gap-2">
      <div className="w-full p-8">
        <h1 className="text-lg text-gray-400 font-mono max-w-fit bg-red-500 p-2 border-2 border-gray-500">
          Why platform
        </h1>
        <h1 className="text-wrap font-bold text-4xl bg-red-500 w-[60%]">
          {"The internets most accurate visitor identifier"}
        </h1>
        <h4 className="text-xl w-[60%]">
          Industry-leading accuracy that lasts for months or years, even when
          cookies are cleared.
        </h4>
        <Button className="w-32 bg-gray-300 border-gray-400 hover:bg-none">
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
