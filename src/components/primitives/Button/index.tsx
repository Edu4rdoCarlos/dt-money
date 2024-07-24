"use client";

import { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  slots: {
    wrapper: "font-medium px-7 py-3 rounded-md transition duration-200 w-full",
  },
  variants: {
    colorScheme: {
      positive: {
        wrapper: "bg-positive-200 hover:bg-positive-200/80 text-white",
      },
      accent: {
        wrapper: "bg-accent-300 hover:bg-accent-300/80 text-white",
      },
    },
  },
  defaultVariants: {
    colorScheme: "accent",
  },
});

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: string | ReactNode;
  onClick: () => void;
  className?: string;
}

export const Button = ({
  colorScheme,
  children,
  onClick,
  className,
}: ButtonProps) => {
  const { wrapper } = buttonVariants();
  return (
    <button onClick={onClick} className={wrapper({ className, colorScheme })}>
      {children}
    </button>
  );
};
