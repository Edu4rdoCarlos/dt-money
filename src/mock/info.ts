import { InfoDataResponse } from "@/service/transaction/types";

export const data: InfoDataResponse[] = [
  {
    id: "0",
    title: "Desenvolvimento de site",
    value: 12000,
    createdAt: "2024-04-13T23:00:00.000Z",
    updatedAt: "2024-04-13T23:00:00.000Z",
    category: { id: "venda", name: "Venda" },
    type: "outcome",
  },
  {
    id: "1",
    title: "Hamburguer",
    value: 59,
    createdAt: "2024-04-10T23:00:00.000Z",
    updatedAt: "2024-04-10T23:00:00.000Z",
    category: { id: "alimentação", name: "Alimentação" },
    type: "income",
  },
  {
    id: "2",
    title: "Aluguel do apartamento",
    value: 1200,
    createdAt: "2024-04-27T23:00:00.000Z",
    updatedAt: "2024-04-27T23:00:00.000Z",
    category: { id: "casa", name: "Casa" },
    type: "income",
  },
  {
    id: "3",
    title: "Computador",
    value: 5400,
    createdAt: "2024-04-15T23:00:00.000Z",
    updatedAt: "2024-04-15T23:00:00.000Z",
    category: { id: "venda", name: "Venda" },
    type: "outcome",
  },
];

export const LAST_OUTCOME_DATE = new Date(2024, 3, 1);
export const LAST_INCOME_DATE = new Date(2024, 3, 30);
