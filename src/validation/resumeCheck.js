import api from "../services/api";

const resumeCheck = async () => {
  const { data } = await api.get("ishospital/");
  return data;
};

export default resumeCheck;
