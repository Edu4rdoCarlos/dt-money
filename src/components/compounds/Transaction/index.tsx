import React, { useState } from "react";
import { Button, Dialog, Select } from "@/components/primitives";
import { InputRadio, Input, InputValue } from "@/components/primitives/Input";
import { Option } from "@/components/primitives/Select";
import { data } from "@/mock/info";
import { ArrowCircleDown, ArrowCircleUp } from "@phosphor-icons/react";
import { cn } from "@/utils/twMerge";

interface TransactionProps {
  openDialog: boolean;
  onOpenDialog: (value: boolean) => void;
}

type RadioValue = "credit" | "debit" | "";

export const Transaction = ({ openDialog, onOpenDialog }: TransactionProps) => {
  const [type, setType] = useState<RadioValue>("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value as RadioValue);
  };

  return (
    <Dialog.Root open={openDialog} onOpenChange={onOpenDialog}>
      <Dialog.Header>Cadastrar transação</Dialog.Header>
      <Dialog.Content>
        <Input placeholder="Nome" type="text" />
        <InputValue placeholder="Preço" />
        <div className="grid grid-cols-2 gap-2 w-full">
          <InputRadio
            label={
              <div className="flex items-center gap-2 justify-center">
                <ArrowCircleUp className="text-positive-200" size={20} />{" "}
                Entrada
              </div>
            }
            value="credit"
            id="credit"
            name="type"
            checked={type === "credit"}
            className={cn(type === "credit" && "!bg-green-50")}
            onChange={handleRadioChange}
          />
          <InputRadio
            label={
              <div className="flex items-center gap-2 justify-center">
                <ArrowCircleDown className="text-destructive-400" size={20} />{" "}
                Saída
              </div>
            }
            value="debit"
            id="debit"
            name="type"
            checked={type === "debit"}
            className={cn(type === "debit" && "!bg-red-50")}
            onChange={handleRadioChange}
          />
        </div>
        <Select>
          <Option disabled selected value={undefined} className="text-gray-200">
            Categoria
          </Option>

          {data.map((item) => (
            <Option key={item.category.id} value={item.category.id}>
              {item.category.name}
            </Option>
          ))}
        </Select>
      </Dialog.Content>
      <Dialog.Footer>
        <Button
          className="w-full text-center py-4 text-base"
          onClick={() => console.log("test")}
          colorScheme="positive"
        >
          Cadastrar
        </Button>
      </Dialog.Footer>
    </Dialog.Root>
  );
};
