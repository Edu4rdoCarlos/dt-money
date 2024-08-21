import { Button, Dialog } from "@/components/primitives";
import { DialogProps } from "@/components/primitives/Dialog";

interface ConfirmDeleteDialogProps extends DialogProps {
  onDelete: () => void;
}

export function ConfirmDeletDialog({
  onDelete,
  ...rest
}: ConfirmDeleteDialogProps) {
  return (
    <Dialog.Root {...rest}>
      <Dialog.Header>Deseja deletar essa transação?</Dialog.Header>

      <Dialog.Footer className="gap-3 flex flex-col">
        <Button
          className="w-full text-center py-4 text-base"
          onClick={onDelete}
          colorScheme="primary"
        >
          Deletar
        </Button>
        <Button
          className="w-full text-center py-4 text-base"
          onClick={() => rest.onOpenChange(false)}
          colorScheme="gray"
        >
          Cancelar
        </Button>
      </Dialog.Footer>
    </Dialog.Root>
  );
}
