const { format } = require("date-fns");
const { ptBR } = require("date-fns/locale");

interface IFormattedDate {
  label: string;
  date: Date;
}

interface IFormattedDateRange {
  startDate: Date;
  endDate: Date;
}

interface IFormattedDateSimple {
  date: Date;
}

export const formattedDate = ({ label, date }: IFormattedDate) => {
  return format(date, label, {
    locale: ptBR,
  });
};

export const formattedDateSimple = ({ date }: IFormattedDateSimple) => {
  return format(date, "dd/MM/yyyy", {
    locale: ptBR,
  });
};

export const formattedDateRange = ({
  startDate,
  endDate,
}: IFormattedDateRange) => {
  const startDay = format(startDate, "d", { locale: ptBR });
  const endDay = format(endDate, "d", { locale: ptBR });
  const month = format(startDate, "MMMM", { locale: ptBR });

  return `${startDay} à ${endDay} de ${month}`;
};
