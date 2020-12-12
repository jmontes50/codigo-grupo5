import axios from "axios";

export const getUsuario = async () => {
  const data = await axios.get("https://reqres.in/api/users?page=2");
  return data;
}