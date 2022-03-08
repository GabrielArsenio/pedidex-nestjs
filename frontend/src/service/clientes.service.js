import axios from "axios";
import { URL_API } from "../main";

export const findAll = () => axios.get(`${URL_API}/cliente`);

export const findById = id => axios.get(`${URL_API}/cliente/${id}`);

export const create = model => axios.post(`${URL_API}/cliente`, model);

export const update = (id, model) => axios.patch(`${URL_API}/cliente/${id}`, model);

export const exclude = id => axios.delete(`${URL_API}/cliente/${id}`);
