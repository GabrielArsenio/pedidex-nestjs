import axios from "axios";
import { URL_API } from "../main";

export const signIn = model => axios.post(`${URL_API}/auth/signin`, model);
