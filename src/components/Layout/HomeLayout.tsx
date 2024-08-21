"use client";
import { useEffect, useRef, useState } from "react";
import { DetailsDesktop, DetailsMobile } from "../compounds/Details";
import { Header } from "../compounds/Header";
import { Info } from "../compounds/Info";
import { Transaction, TransactionFormHandlers } from "../compounds/Transaction";
import { useMedia } from "use-media";
import {
  useCreateTransaction,
  useGetTransactions,
  useUpdateTransaction,
} from "@/hooks/useTransactions";
import useTransactionStore from "@/store/useTransactionStore";
import { InfoArgs } from "@/service/transaction/types";

const HomeLayout = () => {
  const [open, setOpen] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(true);

  const { data: transactions } = useGetTransactions();
  const createTransaction = useCreateTransaction();
  const updateTransaction = useUpdateTransaction();

  const isWide = useMedia({ minWidth: "769px" });

  const formRef = useRef({} as TransactionFormHandlers);

  const { transactionType } = useTransactionStore();

  const handleSubmitTransaction = (transaction: InfoArgs, id?: string) => {
    if (transactionType === "create") {
      createTransaction.mutate(transaction);
    }
    if (id) {
      updateTransaction.mutate({ id, transaction });
    }
  };

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
          <DetailsDesktop
            data={transactions || []}
            onOpenDialogChange={setOpenDeleteDialog}
            openDialog={openDeleteDialog}
          />
        ) : (
          <DetailsMobile
            data={transactions || []}
            onOpenDialogChange={setOpenDeleteDialog}
            openDialog={openDeleteDialog}
          />
        )}
        <Transaction
          ref={formRef}
          openDialog={open}
          onOpenDialog={setOpen}
          onSubmitTransaction={handleSubmitTransaction}
        />
      </div>
    </>
  );
};

export default HomeLayout;
