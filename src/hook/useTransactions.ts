import { data } from "@/mock/info";
import { InfoDataResponse } from "@/service/transaction/types";
import { atom, useAtom } from "jotai";

export const transactionsAtom = atom<InfoDataResponse[]>(data);

export const useTransactions = () => {
  const [transactions, setTransactions] = useAtom(transactionsAtom);

  const addTransaction = (newTransaction: InfoDataResponse) => {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
  };

  return { transactions, addTransaction };
};
