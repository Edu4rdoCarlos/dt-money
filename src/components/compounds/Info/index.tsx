"use client";
import { Container } from "@/components/primitives";
import { InfoDataResponse } from "@/interfaces/info";
import { LAST_CREDIT_DATE, LAST_DEBIT_DATE, data } from "@/mock/info";
import { formattedDateRange, formattedDate } from "@/utils/date";
import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
} from "@phosphor-icons/react";

interface InfoProps {
  data: InfoDataResponse[];
}

const calculateBilling = (data: InfoDataResponse[]) => {
  return data.reduce(
    (groupValue, item) => {
      if (item.type === "credit") {
        groupValue.credit += item.value;
      } else if (item.type === "debit") {
        groupValue.debit += item.value;
      }
      groupValue.total = groupValue.credit - groupValue.debit;
      return groupValue;
    },
    { credit: 0, debit: 0, total: 0 }
  );
};

export const Info = ({ data }: InfoProps) => {
  const { credit, debit, total } = calculateBilling(data);
  return (
    <div className="md:grid md:grid-cols-3 gap-6 items-center -mt-16 flex w-full overflow-x-auto md:p-0 px-6 pb-1">
      <Container
        title={"Entradas"}
        value={credit}
        icon={<ArrowCircleUp className="text-positive-200" size={28} />}
        date={formattedDate({
          date: LAST_CREDIT_DATE,
          label: "'ultima entrada dia' dd 'de' MMMM",
        })}
      />
      <Container
        title={"Saidas"}
        value={debit}
        icon={<ArrowCircleDown className="text-destructive-400" size={28} />}
        date={formattedDate({
          date: LAST_DEBIT_DATE,
          label: "'ultima saida dia' dd 'de' MMMM",
        })}
      />
      <Container
        title={"Total"}
        value={total}
        colorScheme="positive"
        icon={<CurrencyDollar className="text-white" size={24} />}
        date={formattedDateRange({
          startDate: LAST_CREDIT_DATE,
          endDate: LAST_DEBIT_DATE,
        })}
      />
    </div>
  );
};
