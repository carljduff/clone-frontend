import axios from "axios";

export async function getData({ENDPOINT}) {
  let response = await axios.get(`http://127.0.0.1:8000/api/${ENDPOINT}/`);
  return response.data;
}