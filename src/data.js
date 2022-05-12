import axios from "axios";

export async function getData({ENDPOINT}) {
  let response = await axios.get(`https://8000-carljduff-clonebackend-qzjqj4zemon.ws-us43.gitpod.io/api/${ENDPOINT}/`);
  return response.data;
}