import { api } from "../api";

export class DefaultApi<T> {
  constructor(protected endpoint: string, protected resourceId: string) {}

  get = async (): Promise<T[]> => {
    const { data } = await api.get<T[]>(`${this.endpoint}/`);
    return data;
  };

  create = async (formData: T): Promise<T> => {
    const { data } = await api.post<T>(`${this.endpoint}`, formData);
    return data;
  };

  getById = async (id: string): Promise<T> => {
    if (id === "0" || id === "") {
      return {} as T;
    }

    const { data } = await api.get<T>(`${this.endpoint}/${id}`);
    return data;
  };

  delete = async (id: string): Promise<T> => {
    const { data } = await api.delete<T>(`${this.endpoint}/${id}`);
    return data;
  };
}
