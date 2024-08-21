"use client";
import { Button, Table } from "@/components/primitives";
import { InfoDataResponse } from "@/service/transaction/types";
import { formattedDateSimple } from "@/utils/date";
import { formatValue } from "@/utils/number";
import { cn } from "@/utils/twMerge";
import { NotePencil, Trash } from "@phosphor-icons/react";

interface DetailsProps {
  data?: InfoDataResponse[];
}

export const DetailsDesktop = ({ data }: DetailsProps) => {
  if (!data) return <div className="m-auto">Nenhum dado cadastrado</div>;
  return (
    <Table.Root>
      <Table.Thead>
        <th className="!pl-10">Titulo</th>
        <th>Preço</th>
        <th>Categoria</th>
        <th>Data</th>
        <th className="!pl-20">Ações</th>
      </Table.Thead>
      <Table.Tbody>
        {data.map((item) => {
          return (
            <tr key={item.title}>
              <td className="!text-primary-800 w-2/6 rounded-s">
                {item.title}
              </td>
              <td
                className={cn(
                  "w-2/12",
                  item.type === "income"
                    ? "!text-positive-200"
                    : "!text-destructive-400 before:content-['-']"
                )}
              >
                {formatValue(item.value)}
              </td>
              <td className="w-2/12">{item.category.name}</td>
              <td className="w-1/12 rounded-e">
                {formattedDateSimple({ date: new Date(item.createdAt) })}
              </td>
              <td className="gap-2 flex items-center justify-center">
                <Button onClick={() => void 0} className="p-3 w-fit">
                  <NotePencil size={18} />
                </Button>
                <Button
                  colorScheme="gray"
                  onClick={() => void 0}
                  className="p-3 w-fit"
                >
                  <Trash size={18} />
                </Button>
              </td>
            </tr>
          );
        })}
      </Table.Tbody>
    </Table.Root>
  );
};
