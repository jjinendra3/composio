import { Search } from "lucide-react";

export default function RightOne() {
  return (
    <div className="h-full w-full rounded-lg bg-gray-100 p-4 flex flex-row gap-3">
      <div className="h-8 flex items-center justify-center px-2 py-1 border border-gray-300 rounded-xl">
        <Search color="orange" size={16} />
      </div>
      <div className="flex flex-col gap-2 ">
        <h1 className="font-bold text-lg">Any browser, any device.</h1>
        <h3 className="font-thin font-serif text-gray-400">
          Identify returning web and mobile app visitors on all browsers, iOS,
          and Android, with exceptional accuracy.
        </h3>
      </div>
    </div>
  );
}
