"use client";

import { Button } from "@/components/primitives";
import { Logo } from "./Logo";

interface HeaderProps {
  handleOpenDialog: () => void;
}

export const Header = ({ handleOpenDialog }: HeaderProps) => {
  return (
    <header className="bg-accent-400 pt-8 min-h-44">
      <div className="max-w-5xl m-auto text-white font-semibold flex items-center justify-between">
        <Logo />
        <Button className="w-fit" onClick={handleOpenDialog}>
          Nova transação
        </Button>
      </div>
    </header>
  );
};
