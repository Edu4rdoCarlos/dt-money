import { atom, useAtom } from "jotai";

const modalOpenAtom = atom(false);

export const useTransactionDialog = () => {
  const [open, setOpen] = useAtom(modalOpenAtom);

  return { open, setOpen };
};
