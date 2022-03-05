import axios from "axios";

export const findAll = () => axios.get("http://localhost:3000/cliente");
