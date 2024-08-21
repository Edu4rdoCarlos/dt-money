import { InfoDataResponse } from "@/service/transaction/types";
import { formattedDateSimple } from "@/utils/date";
import { formatValue } from "@/utils/number";
import { cn } from "@/utils/twMerge";

interface DetailsMobileProps {
  data: InfoDataResponse[];
}

export const DetailsMobile = ({ data }: DetailsMobileProps) => {
  if (!data) return <div className="m-auto">Nenhum dado cadastrado</div>;

  return (
    <div className="px-6">
      <div className="flex justify-between items-center w-full mb-4">
        <h2 className="text-primary-800 text-xl">Listagem</h2>
        <span className="text-gray-400 font-light">{data.length} items</span>
      </div>
      <div className="flex flex-col gap-2">
        {data.map((item) => {
          console.log("data", item.category.name);

          return (
            <div className="bg-white rounded-lg p-4" key={item.title}>
              <div className="flex gap-1 flex-col mb-5">
                <div className="text-primary-800 font-medium text-sm">
                  {item.title}
                </div>
                <div
                  className={cn(
                    "text-lg",
                    item.type === "income"
                      ? "!text-positive-200"
                      : "!text-destructive-400 before:content-['-']"
                  )}
                >
                  {formatValue(item.value)}
                </div>
              </div>
              <div className="flex justify-between w-full text-gray-400/80 font-light text-sm">
                <div>{item.category.name}</div>
                <div>
                  {formattedDateSimple({ date: new Date(item.createdAt) })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
