import axios from "axios";
import { useQuery, useQueryClient, useMutation } from "react-query";
const baseUrl = "https://inventory-app-crud.herokuapp.com/api/inventory";

const getAll = () => {
  return axios.get(`${baseUrl}/all`);
};

const deleteItem = async (id, awskey) => {
  await axios.delete(`${baseUrl}/${id}`, { data: awskey });
};

const addItem = async (formData) => {
  await axios.post(baseUrl, formData);
};

export function useInventoryData(onSuccess, onError) {
  return useQuery("inventory", getAll, { onSuccess, onError });
}

export function useDeleteItem() {
  const queryClient = useQueryClient();

  return useMutation(deleteItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(["inventory"]);
    },
  });
}

export function useAddItem() {
  const queryClient = useQueryClient();

  return useMutation(addItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(["inventory"]);
    },
  });
}
