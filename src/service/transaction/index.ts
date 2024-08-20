import { api } from "../api";
import { InfoDataResponse, InfoArgs } from "./types";

const endpoint = "/api/transaction";

export class ApiTransaction {
  private readonly endpoint: string = endpoint;

  get = async (): Promise<InfoDataResponse[]> => {
    const { data } = await api.get<InfoDataResponse[]>(`${this.endpoint}/`);
    return data;
  };

  create = async (formData: InfoArgs): Promise<InfoDataResponse> => {
    const { data } = await api.post<InfoDataResponse>(
      `${this.endpoint}`,
      formData
    );
    return data;
  };

  getById = async (id: string): Promise<InfoDataResponse | null> => {
    if (id === "") {
      return null;
    }
    const { data } = await api.get<InfoDataResponse>(`${this.endpoint}/${id}`);
    return data;
  };

  delete = async (id: string) => {
    const { data } = await api.delete<InfoDataResponse>(
      `${this.endpoint}/${id}`
    );
    return data;
  };
}
