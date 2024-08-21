import { cn } from "@/utils/twMerge";
import { OptionHTMLAttributes, SelectHTMLAttributes } from "react";

export const Select = ({
  children,
  className,
  ...rest
}: SelectHTMLAttributes<HTMLSelectElement>) => {
  return (
    <select
      className={cn(
        "py-4 rounded text-sm bg-gray-200/40 border border-gray-200 w-full font-light px-5 focus:outline-primary-400/10 appearance-none enabled:text-gray-400",
        className
      )}
      {...rest}
    >
      {children}
    </select>
  );
};

export const Option = ({
  children,
  className,
  value,
}: OptionHTMLAttributes<HTMLOptionElement>) => {
  return (
    <option className={className} value={value}>
      {children}
    </option>
  );
};
