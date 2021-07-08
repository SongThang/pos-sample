import axios from "axios";

const baseUrl = `https://reqres.in/api`;

export async function bannerRef() {
  return await axios.get(`${baseUrl}/banners`);
}
