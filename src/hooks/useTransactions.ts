import { useMutation, useQuery, useQueryClient } from "react-query";
import { ApiTransaction } from "@/service/transaction";
import { InfoArgs } from "@/service/transaction/types";

const QUERY_DEFAULT_KEY = "qkTransaction";

const api = new ApiTransaction();

export interface UpdateTransactionParams {
  id: string;
  transaction: InfoArgs;
}

export const useGetTransactions = () => {
  return useQuery([QUERY_DEFAULT_KEY], () => api.get());
};

export const useGetTransactionById = (id: string) => {
  return useQuery([QUERY_DEFAULT_KEY, id], () => api.getById(id));
};

export const useCreateTransaction = () => {
  const queryClient = useQueryClient();

  return useMutation((transaction: InfoArgs) => api.create(transaction), {
    onSuccess: async () => {
      try {
        await queryClient.invalidateQueries(QUERY_DEFAULT_KEY);
        console.log("Queries invalidated successfully");
      } catch (error) {
        console.error("Error invalidating queries:", error);
      }
    },
  });
};

export const useUpdateTransaction = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ id, transaction }: { id: string; transaction: InfoArgs }) =>
      api.update(id, transaction),
    {
      onSuccess: async () => {
        try {
          await queryClient.invalidateQueries(QUERY_DEFAULT_KEY);
          console.log("Queries invalidated successfully");
        } catch (error) {
          console.error("Error invalidating queries:", error);
        }
      },
    }
  );
};

export const useDeleteTransaction = () => {
  const queryClient = useQueryClient();

  return useMutation((id: string) => api.delete(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_DEFAULT_KEY);
    },
  });
};
