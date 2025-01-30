import { BadgeDollarSign } from "lucide-react";
import Image from "next/image";
import Info from "./info";
export default function RightTwo() {
  return (
    <div className="h-full w-full rounded-lg bg-white flex flex-col">
      <div className="w-full h-52">
        <Image
          src={"/dotted.svg"}
          width={100}
          height={100}
          alt="Dot"
          className="w-full h-52 object-cover"
        />
      </div>
      <div className="-pt-2 pb-4">
        <Info
          heading="Identify all anonymous visitors."
          description="Get details on suspicious visitors even when VPN, incognito
        mode, or a tampered browser or device is used."
          logo={<BadgeDollarSign color="orange" size={20} />}
        />
      </div>
    </div>
  );
}
