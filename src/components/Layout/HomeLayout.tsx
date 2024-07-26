"use client";
import { useEffect, useRef, useState } from "react";
import { DetailsDesktop, DetailsMobile } from "../compounds/Details";
import { Header } from "../compounds/Header";
import { Info } from "../compounds/Info";
import { Transaction, TransactionFormHandlers } from "../compounds/Transaction";
import { useTransactions } from "@/hook/useTransactions";
import { useMedia } from "use-media";

const HomeLayout = () => {
  const [open, setOpen] = useState(false);
  const { transactions } = useTransactions();

  const isWide = useMedia({ minWidth: "769px" });
  console.log(isWide);

  const formRef = useRef({} as TransactionFormHandlers);

  useEffect(() => {
    if (!isWide) return;

    formRef.current.resetForm();
  }, [open]);

  return (
    <>
      <Header handleOpenDialog={() => setOpen(true)} />
      <div className="max-w-5xl mx-auto flex flex-col gap-14 md:gap-20">
        <Info data={transactions} />
        {isWide ? (
          <DetailsDesktop data={transactions} />
        ) : (
          <DetailsMobile data={transactions} />
        )}
        <Transaction ref={formRef} openDialog={open} onOpenDialog={setOpen} />
      </div>
    </>
  );
};

export default HomeLayout;
