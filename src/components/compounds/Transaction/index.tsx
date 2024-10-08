import React, { forwardRef, useImperativeHandle } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Dialog, Select } from "@/components/primitives";
import { InputRadio, Input, InputValue } from "@/components/primitives/Input";
import { Option } from "@/components/primitives/Select";
import { ArrowCircleDown, ArrowCircleUp } from "@phosphor-icons/react";
import { cn } from "@/utils/twMerge";
import { InfoArgs, InfoType } from "@/service/transaction/types";
import { categories } from "@/mock/info";
import { useTransactionDialog } from "@/hooks/useTransactionDialog";
import useTransactionStore from "@/store/useTransactionStore";

const schema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  price: z.string(),
  type: z.enum(["income", "outcome"], { message: "Tipo é obrigatório" }),
  category: z.string().min(1, "Categoria é obrigatória"),
});

type FormValues = z.infer<typeof schema>;

export interface TransactionFormHandlers {
  resetForm: () => void;
  getData: () => FormValues;
}

interface TransactionProps {
  onSubmitTransaction: (data: InfoArgs, id?: string) => void;
}

export const Transaction = forwardRef<
  TransactionFormHandlers,
  TransactionProps
>(({ onSubmitTransaction }, ref) => {
  const { open, setOpen } = useTransactionDialog();
  const id = "";

  const {
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      type: "income",
      category: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    const info: InfoArgs = {
      categoryId: data.category,
      title: data.name,
      type: data.type as InfoType,
      value: Number(data.price),
    };
    onSubmitTransaction(info, id);
    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    resetForm: () => reset(),
    getData: () => getValues(),
  }));

  const { transactionType } = useTransactionStore();

  const label = transactionType === "create" ? "Cadastrar" : "Atualizar";

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Header>{label} transação</Dialog.Header>
      <Dialog.Content>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Nome" type="text" />
          )}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <Controller
          name="price"
          control={control}
          render={({ field }) => <InputValue {...field} placeholder="Preço" />}
        />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}

        <div className="grid grid-cols-2 gap-2 w-full">
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <>
                <InputRadio
                  label={
                    <div className="flex items-center gap-2 justify-center">
                      <ArrowCircleUp className="text-positive-200" size={20} />{" "}
                      Entrada
                    </div>
                  }
                  value="income"
                  id="income"
                  name="type"
                  checked={field.value === "income"}
                  className={cn(field.value === "income" && "!bg-green-50")}
                  onChange={() => field.onChange("income")}
                />
                <InputRadio
                  label={
                    <div className="flex items-center gap-2 justify-center">
                      <ArrowCircleDown
                        className="text-destructive-400"
                        size={20}
                      />{" "}
                      Saída
                    </div>
                  }
                  value="outcome"
                  id="outcome"
                  name="type"
                  checked={field.value === "outcome"}
                  className={cn(field.value === "outcome" && "!bg-red-50")}
                  onChange={() => field.onChange("outcome")}
                />
              </>
            )}
          />
          {errors.type && <p className="text-red-500">{errors.type.message}</p>}
        </div>

        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <Select {...field}>
              <Option disabled selected value="" className="text-gray-200">
                Categoria
              </Option>
              {categories.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          )}
        />
        {errors.category && (
          <p className="text-red-500">{errors.category.message}</p>
        )}
      </Dialog.Content>
      <Dialog.Footer>
        <Button
          className="w-full text-center py-4 text-base"
          onClick={handleSubmit(onSubmit)}
          colorScheme="positive"
        >
          {label}
        </Button>
      </Dialog.Footer>
    </Dialog.Root>
  );
});

Transaction.displayName = "Transaction";
