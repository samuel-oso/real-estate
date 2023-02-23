import { apiClient } from "@/lib/axios";

export const getProperty = async (id) => {
  const { data } = await apiClient.get("/properties/detail", {
    params: {
      externalID: id,
    },
  });
  return data;
};
