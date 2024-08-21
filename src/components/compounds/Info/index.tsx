"use client";
import { Container } from "@/components/primitives";
import { LAST_INCOME_DATE, LAST_OUTCOME_DATE, data } from "@/mock/info";
import { InfoDataResponse } from "@/service/transaction/types";
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
      if (item.type === "income") {
        groupValue.income += item.value;
      } else if (item.type === "outcome") {
        groupValue.outcome += item.value;
      }
      groupValue.total = groupValue.income - groupValue.outcome;
      return groupValue;
    },
    { income: 0, outcome: 0, total: 0 }
  );
};

export const Info = ({ data }: InfoProps) => {
  const { income, outcome, total } = calculateBilling(data);
  return (
    <div className="md:grid md:grid-cols-3 gap-6 items-center -mt-16 flex w-full overflow-x-auto md:p-0 px-6 pb-1">
      <Container
        title={"Entradas"}
        value={income}
        icon={<ArrowCircleUp className="text-positive-200" size={28} />}
        date={formattedDate({
          date: LAST_INCOME_DATE,
          label: "'ultima entrada dia' dd 'de' MMMM",
        })}
      />
      <Container
        title={"Saidas"}
        value={outcome}
        icon={<ArrowCircleDown className="text-destructive-400" size={28} />}
        date={formattedDate({
          date: LAST_OUTCOME_DATE,
          label: "'ultima saida dia' dd 'de' MMMM",
        })}
      />
      <Container
        title={"Total"}
        value={total}
        colorScheme="positive"
        icon={<CurrencyDollar className="text-white" size={24} />}
        date={formattedDateRange({
          startDate: LAST_INCOME_DATE,
          endDate: LAST_OUTCOME_DATE,
        })}
      />
    </div>
  );
};
