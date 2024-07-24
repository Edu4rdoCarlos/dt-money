import { cn } from "@/utils/twMerge";
import { InputHTMLAttributes, ReactNode, useEffect } from "react";
import CurrencyInput from "react-currency-input-field";
import { CurrencyInputProps } from "react-currency-input-field";
import { tv } from "tailwind-variants";

interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
}

const inputVariants = tv({
  slots: {
    wrapper:
      "py-4 rounded text-sm bg-gray-200/40 border border-gray-200 w-full font-light px-5 focus:outline-accent-400/10",
  },
});

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const { wrapper } = inputVariants();
  return <input className={cn(wrapper(), props.className)} {...props} />;
};

export const InputValue = (props: CurrencyInputProps) => {
  const { wrapper } = inputVariants();
  return (
    <CurrencyInput
      prefix="R$ "
      decimalSeparator=","
      groupSeparator="."
      className={cn(wrapper(), props.className)}
      {...props}
    />
  );
};

export const InputRadio = ({ label, ...rest }: InputRadioProps) => {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        id={rest.id}
        className={cn("appearance-none", rest.className)}
        {...rest}
      />
      <label
        htmlFor={rest.id}
        className={cn(
          "font-light text-sm py-4 rounded border border-gray-200 w-full px-5 cursor-pointer select-none",
          rest.checked && "bg-gray-100 font-medium"
        )}
      >
        {label}
      </label>
    </div>
  );
};
