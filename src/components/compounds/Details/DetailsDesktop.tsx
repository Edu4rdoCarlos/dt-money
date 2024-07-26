"use client";
import { Table } from "@/components/primitives";
import { InfoDataResponse } from "@/interfaces/info";
import { formattedDateSimple } from "@/utils/date";
import { formatValue } from "@/utils/number";
import { cn } from "@/utils/twMerge";

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
      </Table.Thead>
      <Table.Tbody>
        {data.map((item) => {
          return (
            <tr key={item.title}>
              <td className="!text-accent-800 w-2/6 rounded-s">{item.title}</td>
              <td
                className={cn(
                  "w-2/12",
                  item.type === "credit"
                    ? "!text-positive-200"
                    : "!text-destructive-400 before:content-['-']"
                )}
              >
                {formatValue(item.value)}
              </td>
              <td className="w-2/12">{item.category.name}</td>
              <td className="w-1/12 rounded-e">
                {formattedDateSimple({ date: new Date(item.date) })}
              </td>
            </tr>
          );
        })}
      </Table.Tbody>
    </Table.Root>
  );
};
