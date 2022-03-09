import axios from "axios";
import { URL_API } from "../main";

export const findAll = () => axios.get(`${URL_API}/produto`);

export const findById = id => axios.get(`${URL_API}/produto/${id}`);

export const create = model => axios.post(`${URL_API}/produto`, model);

export const update = (id, model) => axios.patch(`${URL_API}/produto/${id}`, model);

export const exclude = id => axios.delete(`${URL_API}/produto/${id}`);
