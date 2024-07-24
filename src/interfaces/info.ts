export interface InfoDataResponse {
  title: string;
  category: CategoryResponse;
  date: string;
  value: number;
  type: "debit" | "credit";
}

export interface CategoryResponse {
  name: string;
  id: string;
}
