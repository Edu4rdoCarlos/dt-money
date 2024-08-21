"use client";

import { Button } from "@/components/primitives";
import { Logo } from "./Logo";
import useTransactionStore from "@/store/useTransactionStore";
import { useTransactionDialog } from "@/hooks/useTransactionDialog";

export const Header = () => {
  const { setTransactionType } = useTransactionStore();
  const { setOpen } = useTransactionDialog();

  const handleNewTransaction = () => {
    setTransactionType("create");
    setOpen(true);
  };
  return (
    <header className="bg-primary-400 pt-8 md:min-h-44 min-h-52 px-4">
      <div className="max-w-5xl m-auto text-white font-semibold flex items-center justify-between">
        <Logo />
        <Button className="w-fit" onClick={handleNewTransaction}>
          Nova transação
        </Button>
      </div>
    </header>
  );
};
