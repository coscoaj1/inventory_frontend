import axios from "axios";
export const baseUrl = "http://localhost:3001/api/inventory";

const getAll = () => {
  const request = axios.get(`${baseUrl}/all`);
  return request.then((response) => response.data);
};

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

const update = async (id, updatedItem) => {
  const response = await axios.put(`${baseUrl}/${id}`, updatedItem);
  return response.data;
};

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

const inventoryService = { getAll, create, update, remove };
export default inventoryService;
