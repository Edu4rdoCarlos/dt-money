import { InfoDataResponse } from "@/service/transaction/types";

export interface DetailsProps {
  data: InfoDataResponse[];
  onDelete: (id: string) => Promise<void>;
}
