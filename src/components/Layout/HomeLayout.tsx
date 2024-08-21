"use client";
import { useEffect, useRef, useState } from "react";
import { DetailsDesktop, DetailsMobile } from "../compounds/Details";
import { Header } from "../compounds/Header";
import { Info } from "../compounds/Info";
import { Transaction, TransactionFormHandlers } from "../compounds/Transaction";
import { useMedia } from "use-media";
import {
  useDeleteTransaction,
  useGetTransactions,
} from "@/hooks/useTransactions";

const HomeLayout = () => {
  const [open, setOpen] = useState(false);

  const { data: transactions } = useGetTransactions();

  const deleteTransaction = useDeleteTransaction();

  const handleDelete = async (id: string) => {
    const res = await deleteTransaction.mutate(id);

    console.log(res, " res delete");
  };

  const isWide = useMedia({ minWidth: "769px" });

  const formRef = useRef({} as TransactionFormHandlers);

  useEffect(() => {
    if (!isWide) return;

    formRef.current.resetForm();
  }, [open]);

  return (
    <>
      <Header handleOpenDialog={() => setOpen(true)} />
      <div className="max-w-5xl mx-auto flex flex-col gap-14 md:gap-20">
        <Info data={transactions || []} />
        {isWide ? (
          <DetailsDesktop data={transactions || []} onDelete={handleDelete} />
        ) : (
          <DetailsMobile data={transactions || []} onDelete={handleDelete} />
        )}
        <Transaction ref={formRef} openDialog={open} onOpenDialog={setOpen} />
      </div>
    </>
  );
};

export default HomeLayout;
