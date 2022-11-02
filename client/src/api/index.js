import axios from 'axios';

const url = 'http://localhost:8000/posts';

export const createItem = (item) => axios.item(url, item);

export const getItems = () => axios.get(url);

export const updateItem = (id, item) => axios.patch(`${url}/${id}`, item);

export const deleteItem = (id) => axios.delete(`${url}/${id}`);