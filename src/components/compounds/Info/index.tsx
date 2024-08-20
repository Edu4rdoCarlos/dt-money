"use client";
import { Container } from "@/components/primitives";
import { InfoDataResponse } from "@/interfaces/info";
import { LAST_OUTCOME_DATE, LAST_INCOME_DATE, data } from "@/mock/info";
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
      if (item.type === "outcome") {
        groupValue.outcome += item.value;
      } else if (item.type === "income") {
        groupValue.income += item.value;
      }
      groupValue.total = groupValue.outcome - groupValue.income;
      return groupValue;
    },
    { outcome: 0, income: 0, total: 0 }
  );
};

export const Info = ({ data }: InfoProps) => {
  const { outcome, income, total } = calculateBilling(data);
  return (
    <div className="md:grid md:grid-cols-3 gap-6 items-center -mt-16 flex w-full overflow-x-auto md:p-0 px-6 pb-1">
      <Container
        title={"Entradas"}
        value={outcome}
        icon={<ArrowCircleUp className="text-positive-200" size={28} />}
        date={formattedDate({
          date: LAST_OUTCOME_DATE,
          label: "'ultima entrada dia' dd 'de' MMMM",
        })}
      />
      <Container
        title={"Saidas"}
        value={income}
        icon={<ArrowCircleDown className="text-destructive-400" size={28} />}
        date={formattedDate({
          date: LAST_INCOME_DATE,
          label: "'ultima saida dia' dd 'de' MMMM",
        })}
      />
      <Container
        title={"Total"}
        value={total}
        colorScheme="positive"
        icon={<CurrencyDollar className="text-white" size={24} />}
        date={formattedDateRange({
          startDate: LAST_OUTCOME_DATE,
          endDate: LAST_INCOME_DATE,
        })}
      />
    </div>
  );
};
