import axios from "axios";

export const findAll = () => axios.get("http://localhost:3000/cliente");

export const create = model => axios.post("http://localhost:3000/cliente", model);

export const findById = id => axios.get("http://localhost:3000/cliente/" + id);
