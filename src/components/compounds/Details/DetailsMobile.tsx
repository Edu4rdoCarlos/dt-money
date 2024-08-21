import { Button } from "@/components/primitives";
import { formattedDateSimple } from "@/utils/date";
import { formatValue } from "@/utils/number";
import { cn } from "@/utils/twMerge";
import { NotePencil, Trash } from "@phosphor-icons/react";
import { DetailsProps } from "./types";
import { useState } from "react";
import { useDeleteTransaction } from "@/hooks/useTransactions";
import { ConfirmDeletDialog } from "./ConfirmDeleteDialog";

export const DetailsMobile = ({
  data,
  onOpenDialogChange,
  openDialog,
}: DetailsProps) => {
  const [transactionId, setTransactionId] = useState("");
  if (!data) return <div className="m-auto">Nenhum dado cadastrado</div>;

  const deleteTransaction = useDeleteTransaction();

  const handleDeleteButton = (id: string) => {
    setTransactionId(id);
    onOpenDialogChange(true);
  };

  const onDeleteTransaction = async () => {
    console.log(transactionId);
    await deleteTransaction.mutate(transactionId);
    onOpenDialogChange(false);
  };
  return (
    <>
      <ConfirmDeletDialog
        open={openDialog}
        onOpenChange={onOpenDialogChange}
        onDelete={onDeleteTransaction}
      />
      <div className="px-6">
        <div className="flex justify-between items-center w-full mb-4">
          <h2 className="text-primary-800 text-xl">Listagem</h2>
          <span className="text-gray-400 font-light">{data.length} items</span>
        </div>
        <div className="flex flex-col gap-2">
          {data.map((item) => {
            return (
              <div className="bg-white rounded-lg p-4" key={item.title}>
                <div className="flex items-start justify-between">
                  <div className="flex gap-1 flex-col mb-5">
                    <div className="text-primary-800 font-medium text-sm">
                      {item.title}
                    </div>
                    <div
                      className={cn(
                        "text-lg",
                        item.type === "income"
                          ? "!text-positive-200"
                          : "!text-destructive-400 before:content-['-']"
                      )}
                    >
                      {formatValue(item.value)}
                    </div>
                  </div>
                  <div className="gap-2 flex items-center justify-center">
                    <Button onClick={() => void 0} className="p-3 w-fit">
                      <NotePencil size={18} />
                    </Button>
                    <Button
                      colorScheme="gray"
                      className="p-3 w-fit"
                      onClick={() => handleDeleteButton(item.id)}
                    >
                      <Trash size={18} />
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between w-full text-gray-400/80 font-light text-sm">
                  <div>{item.category.name}</div>
                  <div>
                    {formattedDateSimple({ date: new Date(item.createdAt) })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
