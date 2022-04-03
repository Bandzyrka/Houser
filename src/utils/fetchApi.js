import axios from "axios";
export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url, params) => {
  
  const { data } = await axios.get((url), {
    headers: {
       'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
       'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    },
    params: params,
  });
    
  return data;
}