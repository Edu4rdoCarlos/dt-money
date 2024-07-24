import { InfoDataResponse } from "@/interfaces/info";

export const data: InfoDataResponse[] = [
  {
    title: "Desenvolvimento de site",
    value: 12000,
    date: "2024-04-13T23:00:00.000Z",
    category: { id: "venda", name: "Venda" },
    type: "credit",
  },
  {
    title: "Hamburguer",
    value: 59,
    date: "2024-04-10T23:00:00.000Z",
    category: { id: "alimentação", name: "Alimentação" },
    type: "debit",
  },
  {
    title: "Aluguel do apartamento",
    value: 1200,
    date: "2024-04-27T23:00:00.000Z",
    category: { id: "casa", name: "Casa" },
    type: "debit",
  },
  {
    title: "Computador",
    value: 5400,
    date: "2024-04-15T23:00:00.000Z",
    category: { id: "venda", name: "Venda" },
    type: "credit",
  },
];

export const LAST_CREDIT_DATE = new Date(2024, 3, 1);
export const LAST_DEBIT_DATE = new Date(2024, 3, 30);
