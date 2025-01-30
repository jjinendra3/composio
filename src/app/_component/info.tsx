export default function Info({
  heading,
  description,
  logo,
}: {
  heading: string;
  description: string;
  //eslint-disable-next-line
  logo: any;
}) {
  return (
    <div className="h-full w-full rounded-xl bg-white py-6 px-8 flex justify-center items-center">
      <div className="flex flex-row gap-3">
        <div className="h-7 w-7 flex items-center justify-center px-1 py-1 border border-gray-300 rounded-lg bg-white shadow-xs">
          {logo}
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-medium text-base ">{heading}</h1>
          <h3 className="font-normal  text-sm text-[#484946] max-w-md">
            {description}
          </h3>
        </div>
      </div>
    </div>
  );
}
