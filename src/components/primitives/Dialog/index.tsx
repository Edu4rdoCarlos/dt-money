"use client";

import { cn } from "@/utils/twMerge";
import { X } from "@phosphor-icons/react";
import { ReactNode } from "react";

interface Props {
  children?: string | ReactNode;
  className?: string;
}

interface DialogProps extends Props {
  open: boolean;
  onOpenChange: (value: boolean) => void;
}

const Header = ({ children, className }: Props) => {
  return (
    <div className={cn("flex justify-between items-center mb-6", className)}>
      {typeof children === "string" ? (
        <h2 className="text-[1.5rem] text-primary-800 font-semibold tracking-normal">
          {children}
        </h2>
      ) : (
        children
      )}
    </div>
  );
};

const Content = ({ children, className }: Props) => {
  return <div className={cn("flex flex-col gap-3", className)}>{children}</div>;
};
const Footer = ({ children, className }: Props) => {
  return <div className={cn("mt-6 w-full", className)}>{children}</div>;
};

const Dialog = ({ open, children, onOpenChange }: DialogProps) => {
  return (
    <>
      {open && (
        <div className="md:fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 h-screen absolute">
          <div className="bg-gray-50 rounded-t-3xl md:rounded shadow-xl max-w-xl w-full md:relative absolute bottom-0">
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none absolute right-4 top-4"
              onClick={() => onOpenChange(false)}
            >
              <X size={20} weight="bold" className="text-gray-400/80" />
            </button>
            <div className="md:p-14 px-6 py-8">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

Dialog.Root = Dialog;
Dialog.Header = Header;
Dialog.Content = Content;
Dialog.Footer = Footer;

export { Dialog };
