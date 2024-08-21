import create from "zustand";
import { TransactionType } from "./types";

interface TransactionStore {
  transactionType: TransactionType;
  setTransactionType: (type: TransactionType) => void;
}

const useTransactionStore = create<TransactionStore>((set) => ({
  transactionType: "create",

  setTransactionType: (type) => set({ transactionType: type }),
}));

export default useTransactionStore;
