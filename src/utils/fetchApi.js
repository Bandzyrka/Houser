import axios from "axios";
import { api_key } from "../env"
export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url, params) => {
  
  const { data } = await axios.get((url), {
    headers: {
       'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
       'X-RapidAPI-Key': api_key,
    },
    params: params,
  });
    
  return data;
}