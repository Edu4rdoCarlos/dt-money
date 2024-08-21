import { CategoryResponse } from "../category/types";

export enum InfoType {
  OUTCOME = "outcome",
  INCOME = "income",
}

export interface InfoDataResponse {
  id: string;
  title: string;
  value: number;
  category: CategoryResponse;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export interface InfoArgs {
  title: string;
  value: number;
  category: CategoryResponse;
  type: InfoType;
}
