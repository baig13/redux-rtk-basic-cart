import axios from "axios";

// A mock function to mimic making an async request for data
export const fetchItems = () => {
  return axios.get("http://localhost:8080/cart");
};

export const addItem = (item) => {
  return axios.post("http://localhost:8080/cart", item);
};

export const deleteItem = (id) => {
  return axios.delete(`http://localhost:8080/cart/${id}`);
};
