import api from "../services/api";
import { BASE_URL_BASE } from "../utils/constants";

const isHopital = async () => {
  const { data } = await api.get("ishospital/");
  if (!data) window.location.href = `${BASE_URL_BASE}/login/`;
};

export default isHopital;
