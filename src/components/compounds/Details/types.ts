import { InfoDataResponse } from "@/service/transaction/types";

export interface DetailsProps {
  data: InfoDataResponse[];
  openDialog: boolean;
  onOpenDialogChange: (value: boolean) => void;
}
