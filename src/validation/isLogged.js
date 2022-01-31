import api from "../services/api";
import { BASE_URL_BASE } from "../utils/constants";

const isLogged = async () => {
  const { data } = await api.get("verifylogin/");
  if (!data) window.location.href = `${BASE_URL_BASE}/login/`;
};

export default isLogged;
