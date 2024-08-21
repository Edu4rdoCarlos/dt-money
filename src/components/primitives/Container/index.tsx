import { formatValue } from "@/utils/number";
import { cn } from "@/utils/twMerge";
import { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

interface ContainerProps extends VariantProps<typeof containerVariant> {
  value: number;
  title: string;
  icon: ReactNode;
  date: string;
}

const containerVariant = tv({
  slots: {
    sWrapper:
      "py-5 px-6 rounded-md bg-white w-full flex flex-col justify-between gap-1 md:min-h-full md:min-h-full min-h-36 min-w-72",
    sValue: "text-[1.7rem] font-medium text-black/75 text-primary-800",
    sTitle: "font-light text-[0.8rem] text-primary-800",
    sDate: "text-gray-400 text-xs font-light",
  },
  variants: {
    colorScheme: {
      positive: {
        sWrapper: "bg-positive-200",
        sValue: "text-white",
        sTitle: "text-white",
        sDate: "text-gray-100",
      },
    },
  },
});

export const Container = (props: ContainerProps) => {
  const { title, value, icon, colorScheme, date } = props;
  const { sWrapper, sValue, sTitle, sDate } = containerVariant();

  return (
    <div className={sWrapper({ colorScheme })}>
      <div className="flex justify-between w-full">
        <h3 className={sTitle({ colorScheme })}>{title}</h3>
        {icon}
      </div>
      <div className="flex flex-col">
        <p className={sValue({ colorScheme })}>{formatValue(value)}</p>
        <span className={sDate({ colorScheme })}>{date}</span>
      </div>
    </div>
  );
};
