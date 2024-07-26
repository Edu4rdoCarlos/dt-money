import { cn } from "@/utils/twMerge";
import { InputHTMLAttributes, ReactNode, useEffect } from "react";
import CurrencyInput from "react-currency-input-field";
import { tv } from "tailwind-variants";

interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
}

interface CurrencyInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string | undefined) => void;
  placeholder?: string;
}

const inputVariants = tv({
  slots: {
    wrapper:
      "py-4 rounded text-sm bg-gray-200/40 border border-gray-200 w-full font-light px-5 focus:outline-accent-400/10",
    radio:
      "font-light text-sm py-4 rounded border border-gray-200 w-full px-5 cursor-pointer select-none",
  },
});

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const { wrapper } = inputVariants();
  return <input className={cn(wrapper(), props.className)} {...props} />;
};

export const InputValue = (props: CurrencyInputProps) => {
  const { wrapper } = inputVariants();

  const handleValueChange = (value: string | undefined) => {
    if (props.onChange) {
      props.onChange(value);
    }
  };

  return (
    <CurrencyInput
      prefix="R$ "
      decimalSeparator=","
      groupSeparator="."
      className={cn(wrapper(), props.className)}
      value={props.value}
      onValueChange={handleValueChange}
      decimalsLimit={2}
      placeholder={props.placeholder}
    />
  );
};

export const InputRadio = ({ label, ...rest }: InputRadioProps) => {
  const { radio } = inputVariants();
  return (
    <div className="flex items-center">
      <input
        type="radio"
        id={rest.id}
        {...rest}
        className="appearance-none hidden"
      />
      <label
        htmlFor={rest.id}
        className={cn(
          radio({ className: rest.className }),
          rest.checked && "bg-gray-100 font-medium"
        )}
      >
        {label}
      </label>
    </div>
  );
};
