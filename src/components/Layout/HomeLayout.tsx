"use client";
import { forwardRef, useEffect, useRef, useState } from "react";
import { Details } from "../compounds/Details";
import { Header } from "../compounds/Header";
import { Info } from "../compounds/Info";
import { Transaction, TransactionFormHandlers } from "../compounds/Transaction";
import { useTransactions } from "@/hook/useTransactions";

const HomeLayout = () => {
  const [open, setOpen] = useState(false);
  const { transactions } = useTransactions();

  const formRef = useRef({} as TransactionFormHandlers);

  useEffect(() => {
    formRef.current.resetForm();
  }, [open]);

  return (
    <>
      <Header handleOpenDialog={() => setOpen(true)} />
      <div className="max-w-5xl mx-auto flex flex-col gap-20">
        <Info data={transactions} />
        <Details data={transactions} />
        <Transaction ref={formRef} openDialog={open} onOpenDialog={setOpen} />
      </div>
    </>
  );
};

export default HomeLayout;
