import { CategoryResponse, InfoDataResponse } from "@/interfaces/info";

export const categories: CategoryResponse[] = [
  { id: "venda", name: "Venda" },
  { id: "alimentacao", name: "Alimentação" },
  { id: "casa", name: "Casa" },
];

export const data: InfoDataResponse[] = [
  {
    title: "Desenvolvimento de site",
    value: 12000,
    date: "2024-04-13T23:00:00.000Z",
    category: categories[0],
    type: "credit",
  },
  {
    title: "Hamburguer",
    value: 59,
    date: "2024-04-10T23:00:00.000Z",
    category: categories[1],
    type: "debit",
  },
  {
    title: "Aluguel do apartamento",
    value: 1200,
    date: "2024-04-27T23:00:00.000Z",
    category: categories[2],
    type: "debit",
  },
  {
    title: "Computador",
    value: 5400,
    date: "2024-04-15T23:00:00.000Z",
    category: categories[0],
    type: "credit",
  },
];

export const LAST_CREDIT_DATE = new Date(2024, 3, 1);
export const LAST_DEBIT_DATE = new Date(2024, 3, 30);
