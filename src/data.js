import axios from "axios";

export async function getData() {
  let response = await axios.get('https://8000-carljduff-clonebackend-qzjqj4zemon.ws-us43.gitpod.io/api/events/');
  return response.data;
}