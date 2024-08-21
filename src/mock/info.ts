import { InfoDataResponse } from "@/service/transaction/types";

export const categories = [
  { id: "c5177a12-26b8-4f1a-9a3c-934f40bfc869", name: "Alimentação" },
  { id: "a723ad14-1650-4028-9087-51c70d534153", name: "Casa" },
  { id: "0f159692-0537-4670-a8a4-3d08b7a4043b", name: "Venda" },
];

export const data: InfoDataResponse[] = [
  {
    id: "0",
    title: "Desenvolvimento de site",
    value: 12000,
    createdAt: "2024-04-13T23:00:00.000Z",
    updatedAt: "2024-04-13T23:00:00.000Z",
    category: categories[0],
    type: "income",
  },
  {
    id: "1",
    title: "Hamburguer",
    value: 59,
    createdAt: "2024-04-10T23:00:00.000Z",
    updatedAt: "2024-04-10T23:00:00.000Z",
    category: categories[1],
    type: "outcome",
  },
  {
    id: "2",
    title: "Aluguel do apartamento",
    value: 1200,
    createdAt: "2024-04-27T23:00:00.000Z",
    updatedAt: "2024-04-27T23:00:00.000Z",
    category: categories[2],
    type: "outcome",
  },
  {
    id: "3",
    title: "Computador",
    value: 5400,
    createdAt: "2024-04-15T23:00:00.000Z",
    updatedAt: "2024-04-15T23:00:00.000Z",
    category: categories[3],
    type: "income",
  },
];

export const LAST_INCOME_DATE = new Date(2024, 3, 1);
export const LAST_OUTCOME_DATE = new Date(2024, 3, 30);
