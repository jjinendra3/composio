import { Search } from "lucide-react";

export default function RightOne() {
  return (
    <div className="h-full w-full rounded-lg bg-gray-100 p-3 flex flex-col gap-1 justify-center">
      <div className="flex flex-row gap-2 items-center">
        <div className="h-7 w-7 flex items-center justify-center px-2 py-1 border border-gray-300 rounded-lg">
          <Search color="orange" size={16} />
        </div>
        <h1 className="font-medium text-base">Any browser, any device.</h1>
      </div>
      <h3 className="font-normal text-sm font-serif text-[#484946] pl-9">
        Identify returning web and mobile app visitors on all browsers, iOS, and
        Android, with exceptional accuracy.
      </h3>
    </div>
  );
}
